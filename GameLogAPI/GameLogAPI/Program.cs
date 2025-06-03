using FastEndpoints;
using FastEndpoints.Swagger;
using GameLogAPI.Middlewares;
using GameLogAPI.src.Data;
using GameLogAPI.src.Repositories;
using GameLogAPI.src.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<GameDbContext>();

builder.Services.AddDbContext<GameDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services
   .AddFastEndpoints()
   .SwaggerDocument();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options => {
    options.AddPolicy(MyAllowSpecificOrigins,
        builder => builder.WithOrigins("http://localhost:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

builder.Services.AddScoped<IGameRepository, GameRepository>();
builder.Services.AddScoped<GameService>();

builder.Services.AddScoped<IPlatformRepository, PlatformRepository>();
builder.Services.AddScoped<PlatformService>();

var app = builder.Build();
app.UseFastEndpoints()
   .UseSwaggerGen();

app.MapIdentityApi<IdentityUser>();

app.UseCors(MyAllowSpecificOrigins);

app.UseExceptionHandler();

app.Run();
