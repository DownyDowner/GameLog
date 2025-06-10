using FastEndpoints;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Authentication {
    public class LoginEndpoint(AuthService service) : Endpoint<LoginRequest> {
        public override void Configure() {
            Post("/login");
            AllowAnonymous();
        }

        public override async Task HandleAsync(LoginRequest req, CancellationToken ct) {
            string token = await service.Login(req.Email, req.Password, ct);
            await SendOkAsync(token, cancellation: ct);
        }
    }

    public record LoginRequest(string Email, string Password);
}
