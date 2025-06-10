using FastEndpoints;
using GameLogAPI.src.Constants;
using GameLogAPI.src.Entities;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Games {
    public class SetGameStatusToPlannedEndpoint(GameService service) : EndpointWithoutRequest {
        public override void Configure() {
            Patch("games/{id:guid}/planned");
            Roles(RoleConstants.ADMIN);
        }

        public override async Task HandleAsync(CancellationToken ct) {
            var id = Route<Guid>("id");
            await service.UpdateGameStatus(id, GameStatus.Planned, ct);
            await SendNoContentAsync(ct);
        }
    }

    public class SetGameStatusToPlayingEndpoint(GameService service) : EndpointWithoutRequest {
        public override void Configure() {
            Patch("games/{id:guid}/playing");
            AllowAnonymous();
        }

        public override async Task HandleAsync(CancellationToken ct) {
            var id = Route<Guid>("id");
            await service.UpdateGameStatus(id, GameStatus.Playing, ct);
            await SendNoContentAsync(ct);
        }
    }

    public class SetGameStatusToCompletedEndpoint(GameService service) : Endpoint<SetGameStatusWithReviewRequest> {
        public override void Configure() {
            Patch("games/{id:guid}/completed");
            AllowAnonymous();
        }

        public override async Task HandleAsync(SetGameStatusWithReviewRequest req, CancellationToken ct) {
            await service.UpdateGameStatusWithReview(req.Id, GameStatus.Completed, req.Rating, req.Review, ct);
            await SendNoContentAsync(ct);
        }
    }

    public class SetGameStatusToDroppedEndpoint(GameService service) : Endpoint<SetGameStatusWithReviewRequest> {
        public override void Configure() {
            Patch("games/{id:guid}/dropped");
            AllowAnonymous();
        }

        public override async Task HandleAsync(SetGameStatusWithReviewRequest req, CancellationToken ct) {
            await service.UpdateGameStatusWithReview(req.Id, GameStatus.Dropped, req.Rating, req.Review, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record SetGameStatusWithReviewRequest {
        public Guid Id { get; init; }
        public int? Rating { get; init; }
        public string? Review { get; init; }

        public SetGameStatusWithReviewRequest(Guid id, int? rating, string? review) {
            Id = id;
            Rating = rating;
            Review = string.IsNullOrWhiteSpace(review) ? null : review;
        }
    }
}
