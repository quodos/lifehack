class Color {
  constructor(name, shortname, color) {
    this.name = name;
    this.shortname = shortname;
    this.color = color;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get shortname() {
    return this._shortname;
  }

  set shortname(value) {
    this._shortname = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }
}

export default Color;
