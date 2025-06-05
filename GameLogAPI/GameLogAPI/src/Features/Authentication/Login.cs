using FastEndpoints;
using FastEndpoints.Security;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Authentication {
    public class LoginEndpoint(AuthService service) : Endpoint<LoginRequest> {
        public override void Configure() {
            Post("/login");
            AllowAnonymous();
        }

        public override async Task HandleAsync(LoginRequest req, CancellationToken ct) {
            var (isValid, user) = await service.ValidateAndGetUserAsync(req.Email, req.Password, ct);

            if (!isValid || user == null)
                ThrowError("The supplied credentials are invalid!");

            var signingKey = Environment.GetEnvironmentVariable("JWT_SIGNING_KEY");
            if (string.IsNullOrEmpty(signingKey))
                ThrowError("JWT signing key is missing.");

            var roles = await service.GetRolesAsync(user);

            var jwtToken = JwtBearer.CreateToken(o => {
                o.SigningKey = signingKey;
                o.ExpireAt = DateTime.UtcNow.AddDays(1);

                o.User.Claims.Add(("sub", user.Id));
                o.User.Claims.Add(("email", req.Email));

                foreach (var role in roles)
                    o.User.Roles.Add(role);
            });

            await SendAsync(new {
                req.Email,
                Token = jwtToken
            });
        }
    }

    public record LoginRequest(string Email, string Password);
}
