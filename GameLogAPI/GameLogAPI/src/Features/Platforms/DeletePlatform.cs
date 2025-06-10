using FastEndpoints;
using GameLogAPI.src.Constants;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Platforms {
    public class DeletePlatformEndpoint(PlatformService service) : Endpoint<DeletePlatformRequest> {
        public override void Configure() {
            Delete("platforms/{id:guid}");
            Roles(RoleConstants.ADMIN);
        }

        public override async Task HandleAsync(DeletePlatformRequest req, CancellationToken ct) {
            await service.DeletePlatform(req.Id, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record DeletePlatformRequest(Guid Id);
}
