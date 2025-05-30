using FastEndpoints;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Games {
    public class GetGameEndpoint(GameService service) : Endpoint<GetGameRequest, GetGameResponse> {
        public override void Configure() {
            Get("games/{id:guid}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(GetGameRequest req, CancellationToken ct) {
            var game = await service.GetGame(req.Id, ct);
            await SendOkAsync(new GetGameResponse(
                Id: game.Id,
                Title: game.Title,
                Platform: game.Platform!.Name,
                ReleaseDate: game.ReleaseDate,
                Status: game.Status.ToString(),
                Rating: game.Rating,
                Review: game.Review,
                StartedOn: game.StartedOn,
                CompletedOn: game.CompletedOn,
                Shop: game.Shop,
                ShopLink: game.ShopLink
            ), ct);
        }
    }

    public record GetGameRequest(Guid Id);
    public record GetGameResponse(Guid Id, string Title, string Platform, DateOnly ReleaseDate, string Status, int? Rating, 
        string? Review, DateTime? StartedOn, DateTime? CompletedOn, string? Shop, string? ShopLink);
}
