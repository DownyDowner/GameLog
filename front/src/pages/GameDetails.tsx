import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GameFull } from "../models/GameFull";
import { getGame } from "../apis/GameApi";
import { ROUTES } from "../router/Routes";
import XpWindow from "../components/XpWindow";
import XpLoadingScreen from "../components/XpLoadingScreen";
import GameDetailsImage from "./GameDetailsImage";
import GameDetailsReview from "./GameDetailsReview";

function GameDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) return <Navigate to={ROUTES.HOME} replace />;

  const [game, setGames] = useState<GameFull>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGame(id);
        setGames(data);
      } catch (err) {
        setError("Une erreur est survenue.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClose = () => {
    navigate(ROUTES.HOME);
  };

  if (loading) {
    return (
      <XpWindow title="Chargement" onClose={handleClose}>
        <XpLoadingScreen />
      </XpWindow>
    );
  }

  if (error || !game) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <XpWindow title={`${game.title} - ${game.platform}`} onClose={handleClose}>
      <div className="row">
        <GameDetailsImage image="test" title={game.title} />
        <GameDetailsReview rating={game.rating!} review={game.review!} />
      </div>
    </XpWindow>
  );
}

export default GameDetails;
