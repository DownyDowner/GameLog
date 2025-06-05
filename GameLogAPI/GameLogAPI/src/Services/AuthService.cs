using FastEndpoints.Security;
using GameLogAPI.src.Exceptions;
using Microsoft.AspNetCore.Identity;

namespace GameLogAPI.src.Services {
    public class AuthService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager) {
        public async Task<string> Login(string email, string password, CancellationToken ct) {
            var user = await userManager.FindByEmailAsync(email);
            if (user == null)
                throw new ServiceException("User not found.", StatusCodes.Status404NotFound);

            var result = await signInManager.CheckPasswordSignInAsync(user, password, false);
            if (!result.Succeeded)
                throw new ServiceException("The supplied credentials are invalid!", StatusCodes.Status401Unauthorized);

            var signingKey = Environment.GetEnvironmentVariable("JWT_SIGNING_KEY");
            if (string.IsNullOrEmpty(signingKey))
                throw new ServiceException("JWT signing key is missing.", StatusCodes.Status500InternalServerError);

            var roles = await userManager.GetRolesAsync(user);

            return JwtBearer.CreateToken(o =>
            {
                o.SigningKey = signingKey;
                o.ExpireAt = DateTime.UtcNow.AddDays(1);

                o.User.Claims.Add(("sub", user.Id));
                o.User.Claims.Add(("email", email));

                foreach (var role in roles)
                    o.User.Roles.Add(role);
            });
        }
    }
}
