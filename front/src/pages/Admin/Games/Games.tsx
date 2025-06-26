import { useEffect, useState } from "react";
import { GameList } from "../../../models/GameList";
import GamesList from "./Components/GamesList";
import { getGames } from "../../../apis/GameApi";

const Games: React.FC = () => {
  const [games, setGames] = useState<GameList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGames()
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Une erreur est survenue");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Liste des Jeux</h1>
      {loading && <p>Chargement des jeux...</p>}
      {error && <p className="text-danger">Erreur : {error}</p>}
      {!loading && !error && <GamesList games={games} />}
    </div>
  );
};

export default Games;
