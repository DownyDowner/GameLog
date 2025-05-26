export class GameFullDTO {
  id = "";
  title = "";
  platform = "";
  releaseDate = "";
  status = "";
  rating: null | number = null;
  review: null | string = null;
  startedOn: null | string = null;
  completedOn: null | string = null;
}

export class GameFull extends GameFullDTO {
  constructor(data: GameFull | GameFullDTO | null) {
    super();
    if (data) Object.assign(this, data);
  }
}
