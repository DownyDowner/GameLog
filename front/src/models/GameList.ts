export class GameListDTO {
  id = "";
  title = "";
  platform = "";
  releaseDate = "";
  status = "";
}

export class GameList extends GameListDTO {
  constructor(data: GameList | GameListDTO | null) {
    super();
    if (data) Object.assign(this, data);
  }
}
