﻿using FastEndpoints;
using FluentValidation;
using GameLogAPI.src.Features.Games;
using GameLogAPI.src.Services;
using Microsoft.EntityFrameworkCore;

namespace GameLogAPI.src.Features.Platforms {
    public class AddPlatformEndpoint(PlatformService service) : Endpoint<AddPlatformRequest> {
        public override void Configure() {
            Post("platforms");
            AllowAnonymous();
        }

        public override async Task HandleAsync(AddPlatformRequest req, CancellationToken ct) {
            var id = await service.AddPlatform(req, ct);
            await SendCreatedAtAsync<GetPlatformEndpoint>(new { id }, null, cancellation: ct);
        }
    }

    public record AddPlatformRequest(string Name);

    public class AddPlatformRequestValidator : Validator<AddPlatformRequest> {
        public AddPlatformRequestValidator() {
            RuleFor(x => x.Name)
                .NotEmpty();
        }
    }
}
