import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { GameFull } from "../models/GameFull";
import { getGame } from "../apis/GameApi";
import { ROUTES } from "../router/Routes";

function GameDetails() {
  const { id } = useParams();
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
        console.log("Game", game);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return <div>Game ID: {id}</div>;
}

export default GameDetails;
