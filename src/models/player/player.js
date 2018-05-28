import toNumber from 'lodash/toNumber';
import toSafeInteger from 'lodash/toSafeInteger';

class Player {
  constructor(name = 'Name', startingLifeTotal = 20, counter = {}, colors = []) {
    this.name = name;
    this.commanderName = null;
    this.lifetotal = toSafeInteger(startingLifeTotal);
    this.counter = {
      poison: 0,
      ...counter
    };
    this.colors = colors;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get commanderName() {
    return this._name;
  }

  set commanderName(value) {
    this._commanderName = value;
  }

  get lifetotal() {
    return this._lifetotal;
  }

  set lifetota(value) {
    this._lifetotal = toNumber(value);
  }

  get counter() {
    return this._counter;
  }

  set counter(value) {
    this._counter = value;
  }

  get poison() {
    return this._counter.poison;
  }

  set poison(value) {
    this._counter.poison = toSafeInteger(value);
  }

  get colors() {
    return this._colors;
  }

  set colors(value) {
    this._colors = value;
  }
}

export default Player;
