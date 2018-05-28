import toNumber from 'lodash/toNumber';
import toSafeInteger from 'lodash/toSafeInteger';

class Player {
  constructor(name = 'Name', startingLifeTotal = 20, colors = []) {
    this.name = name;
    this.lifetotal = toSafeInteger(startingLifeTotal);
    this.counter = {
      poison: 0,
    };
    this.colors = colors;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
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
