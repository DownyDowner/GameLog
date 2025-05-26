import { getGamesCompleted } from "../apis/GameApi";
import { useEffect, useState } from "react";
import { GameCompletedList } from "../models/GameCompletedList";
import XpWindow from "../components/XpWindow";
import XpLoadingScreen from "../components/XpLoadingScreen";
import { Link } from "react-router-dom";

function GamesCompletedList() {
  const [games, setGames] = useState<GameCompletedList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGamesCompleted();
        setGames(data);
      } catch (err) {
        setError("Une erreur est survenue.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const getGameDetailsPath = (id: string) => `/games/${id}`;

  const content = loading ? (
    <XpLoadingScreen />
  ) : error ? (
    <div className="alert alert-danger text-center m-4" role="alert">
      Une erreur est survenue lors du chargement des jeux.
    </div>
  ) : (
    <ul className="d-flex flex-column justify-content-center align-items-center gap-2 px-3 mt-2">
      {games.length > 0 ? (
        games.map((game) => (
          <Link
            to={getGameDetailsPath(game.id)}
            className="xp-button w-50 d-block text-decoration-none text-center"
          >
            {game.title} - {game.platform} - {formatDate(game.completedOn)}
          </Link>
        ))
      ) : (
        <li className="list-unstyled">Pas de Jeux référencés</li>
      )}
    </ul>
  );

  return <XpWindow title="Mes Jeux Complétés">{content}</XpWindow>;
}

export default GamesCompletedList;
