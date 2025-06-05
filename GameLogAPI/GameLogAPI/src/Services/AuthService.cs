using Microsoft.AspNetCore.Identity;

namespace GameLogAPI.src.Services {
    public class AuthService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager) {
        public async Task<(bool IsValid, IdentityUser? User)> ValidateAndGetUserAsync(string email, string password, CancellationToken ct) {
            var user = await userManager.FindByEmailAsync(email);
            if (user == null)
                return (false, null);

            var result = await signInManager.CheckPasswordSignInAsync(user, password, false);
            return (result.Succeeded, result.Succeeded ? user : null);
        }

        public async Task<IEnumerable<string>> GetRolesAsync(IdentityUser user) {
            return await userManager.GetRolesAsync(user);
        }
    }
}
