interface GameDetailsImageProps {
  image: string;
  title: string;
}

function GameDetailsImage({ image, title }: GameDetailsImageProps) {
  return (
    <div className="col-12 col-md-6">
      <img
        src={image || "/default-game.jpg"}
        alt={title}
        className="img-fluid border rounded"
      />
    </div>
  );
}

export default GameDetailsImage;
