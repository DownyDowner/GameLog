using FastEndpoints;
using FluentValidation;
using GameLogAPI.src.Constants;
using GameLogAPI.src.Services;

namespace GameLogAPI.src.Features.Platforms {
    public class UpdatePlatformEndpoint(PlatformService service) : Endpoint<UpdatePlatformRequest> {
        public override void Configure() {
            Put("platforms/{id:guid}");
            Roles(RoleConstants.ADMIN);
        }

        public override async Task HandleAsync(UpdatePlatformRequest req, CancellationToken ct) {
            await service.UpdatePlatform(req, ct);
            await SendNoContentAsync(ct);
        }
    }

    public record UpdatePlatformRequest(Guid Id, string Name);

    public class UpdatePlatformRequestValidator : Validator<UpdatePlatformRequest> {
        public UpdatePlatformRequestValidator() {
            RuleFor(x => x.Name)
                .NotEmpty();
        }
    }
}
