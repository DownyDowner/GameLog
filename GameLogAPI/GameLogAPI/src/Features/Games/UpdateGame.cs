using FastEndpoints;
using FluentValidation;
using GameLogAPI.src.Entities;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Games {
    public class UpdatePlatformEndpoint(GameService service) : Endpoint<UpdateGameRequest> {
        public override void Configure() {
            Put("games/{id:guid}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(UpdateGameRequest req, CancellationToken ct) {
            await service.UpdateGame(req, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record UpdateGameRequest(Guid Id, string Title, Guid IdPlatform, DateOnly ReleaseDate, GameStatus Status, 
        int? Rating, string? Review, DateTime? StartedOn, DateTime? CompletedOn, string? Shop, string? ShopLink);

    public class UpdateGameRequestValidator : Validator<UpdateGameRequest> {
        public UpdateGameRequestValidator() {
            RuleFor(x => x.Title)
                .NotEmpty();
        }
    }
}
