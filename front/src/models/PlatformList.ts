export class PlatformListDTO {
  id = "";
  name = "";
}

export class PlatformList extends PlatformListDTO {
  constructor(data: PlatformList | PlatformListDTO | null) {
    super();
    if (data) Object.assign(this, data);
  }
}
