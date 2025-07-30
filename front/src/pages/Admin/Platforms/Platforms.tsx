import { useEffect, useState } from "react";
import { PlatformList } from "../../../models/PlatformList";
import { getPlatforms } from "../../../apis/PlatformApi";
import PlatformsList from "./Components/PlatformsList";

const Platforms: React.FC = () => {
  const [platforms, setPlatforms] = useState<PlatformList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPlatforms()
      .then((data) => {
        setPlatforms(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Une erreur est survenue");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Liste des Plateformes</h1>
      {loading && <p>Chargement des Plateformes...</p>}
      {error && <p className="text-danger">Erreur : {error}</p>}
      {!loading && !error && <PlatformsList platforms={platforms} />}
    </div>
  );
};

export default Platforms;
