using GameLogAPI.src.Entities;
using GameLogAPI.src.Exceptions;
using GameLogAPI.src.Features.Games;
using GameLogAPI.src.Repositories;

namespace GameLogAPI.src.Services {
    public class GameService(IGameRepository repository) {
        internal async Task<Guid> AddGame(AddGameRequest req, CancellationToken ct) {
            var game = new Game { Title= req.Title, IdPlatform = req.IdPlatform, ReleaseDate = req.ReleaseDate, Shop = req.Shop, ShopLink = req.ShopLink };
            return await repository.AddAsync(game, ct);
        }

        internal async Task DeleteGame(Guid id, CancellationToken ct) {
            await repository.DeleteAsync(id, ct);
        }

        internal async Task<Game> GetGame(Guid id, CancellationToken ct) {
            return await repository.GetByIdAsync(id, ct);
        }

        internal async Task<IEnumerable<Game>> GetGames(CancellationToken ct) {
            return await repository.GetAllAsync(ct);
        }

        internal async Task<IEnumerable<Game>> GetGamesCompleted(CancellationToken ct) {
            return await repository.GetGamesCompleted(ct);
        }

        internal async Task UpdateGame(UpdateGameRequest req, CancellationToken ct) {
            var game = await repository.GetByIdAsync(req.Id, ct);
            if (game == null)
                throw new ServiceException($"Game with ID {req.Id} was not found.", StatusCodes.Status404NotFound);
            game.Title = req.Title;
            game.IdPlatform = req.IdPlatform;
            game.ReleaseDate = req.ReleaseDate;
            game.Status = req.Status;
            game.Rating = req.Rating;
            game.Review = req.Review;
            game.StartedOn = req.StartedOn;
            game.CompletedOn = req.CompletedOn;
            game.Shop = req.Shop;
            game.ShopLink = req.ShopLink;
            await repository.UpdateAsync(game, ct);
        }

        internal async Task UpdateGameStatus(Guid id, GameStatus status, CancellationToken ct) {
            await repository.UpdateGameStatusAsync(id, status, ct);
        }

        internal async Task UpdateGameStatusWithReview(Guid id, GameStatus status, int? rating, string? review, CancellationToken ct) {
            await repository.UpdateGameStatusWithReviewAsync(id, status, rating, review, ct);
        }
    }
}
