using FastEndpoints;
using GameLogAPI.src.Constants;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Games {
    public class DeleteGameEndpoint(GameService service) : Endpoint<DeleteGameRequest> {
        public override void Configure() {
            Delete("games/{id:guid}");
            Roles(RoleConstants.ADMIN);
        }

        public override async Task HandleAsync(DeleteGameRequest req, CancellationToken ct) {
            await service.DeleteGame(req.Id, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record DeleteGameRequest(Guid Id);
}
