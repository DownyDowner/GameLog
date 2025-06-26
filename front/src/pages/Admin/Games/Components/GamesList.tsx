import { GameList } from "../../../../models/GameList";

interface GamesListProps {
  games: GameList[];
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
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
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.title}</td>
              <td>{game.platform}</td>
              <td>{game.releaseDate}</td>
              <td>{game.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesList;
