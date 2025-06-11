using FastEndpoints;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Authentication {
    public class RegisterAdminEndpoint(AuthService service) : Endpoint<RegisterAdminRequest> {
        public override void Configure() {
            Post("/register/admin");
            AllowAnonymous();
        }

        public override async Task HandleAsync(RegisterAdminRequest req, CancellationToken ct) {
            await service.RegisterAdmin(req.Email, req.Password, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record RegisterAdminRequest(string Email, string Password);
}
