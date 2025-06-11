using FastEndpoints;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Authentication {
    public class RegisterUserEndpoint(AuthService service) : Endpoint<RegisterUserRequest> {
        public override void Configure() {
            Post("/register/user");
            AllowAnonymous();
        }

        public override async Task HandleAsync(RegisterUserRequest req, CancellationToken ct) {
            await service.RegisterUser(req.Email, req.Password, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record RegisterUserRequest(string Email, string Password);
}
