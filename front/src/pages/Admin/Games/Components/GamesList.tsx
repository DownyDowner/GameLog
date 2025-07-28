import React, { useState, useMemo } from "react";
import { GameList } from "../../../../models/GameList";

interface GamesListProps {
  games: GameList[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const platforms = useMemo(
    () => Array.from(new Set(games.map((game) => game.platform))),
    [games]
  );
  const status = useMemo(
    () => Array.from(new Set(games.map((game) => game.status))),
    [games]
  );

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesTitle = game.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase());
      const matchesPlatform =
        !selectedPlatform || game.platform === selectedPlatform;
      const matchesStatus = !selectedStatus || game.status === selectedStatus;

      return matchesTitle && matchesPlatform && matchesStatus;
    });
  }, [games, searchTitle, selectedPlatform, selectedStatus]);

  return (
    <div>
      <div className="mb-3 d-flex gap-3 align-items-end flex-wrap">
        <div>
          <label className="form-label">Titre</label>
          <input
            type="text"
            className="form-control"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Rechercher un titre"
          />
        </div>

        <div>
          <label className="form-label">Plateforme</label>
          <select
            className="form-select"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="">Toutes</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Statut</label>
          <select
            className="form-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Tous</option>
            {status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Titre</th>
              <th>Plateforme</th>
              <th>Date de sortie</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {filteredGames.map((game) => (
              <tr key={game.id}>
                <td>{game.title}</td>
                <td>{game.platform}</td>
                <td>{game.releaseDate}</td>
                <td>{game.status}</td>
              </tr>
            ))}
            {filteredGames.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center">
                  Aucun jeu trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GamesList;
