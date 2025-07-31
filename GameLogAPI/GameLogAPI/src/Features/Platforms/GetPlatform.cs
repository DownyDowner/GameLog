using FastEndpoints;
using GameLogAPI.src.Services;
namespace GameLogAPI.src.Features.Platforms {
    public class GetPlatformEndpoint(PlatformService service) : Endpoint<GetPlatformRequest, GetPlatformResponse> {
        public override void Configure() {
            Get("platforms/{id:guid}");
            AllowAnonymous();
        }

        public override async Task HandleAsync(GetPlatformRequest req, CancellationToken ct) {
            var platform = await service.GetPlatform(req.Id, ct);
            await SendOkAsync(new GetPlatformResponse(
                Id: platform.Id,
                Name: platform.Name,
                Games: platform.Games
                    .Select(x => new GetPlatformGameResponse(
                            Id: x.Id,
                            Title: x.Title,
                            Platform: x.Platform!.Name,
                            ReleaseDate: x.ReleaseDate,
                            Status: x.Status.ToString()
                        )
                    )
                    .ToArray()
            ), ct);
        }
    }

    public record GetPlatformRequest(Guid Id);
    public record GetPlatformResponse(Guid Id, string Name, GetPlatformGameResponse[] Games);
    public record GetPlatformGameResponse(Guid Id, string Title, string Platform, DateOnly ReleaseDate, string Status);
}
