import toNumber from 'lodash/toNumber';
import toSafeInteger from 'lodash/toSafeInteger';

class Player {
  constructor(name = 'Name', startingLifeTotal = 20, colors = [], counter = {}) {
    this.name = name;
    this.commanderName = null;
    this.lifetotal = toSafeInteger(startingLifeTotal);
    this.counter = {
      poison: 0,
      ...counter
    };
    this.colors = colors;
  }

  /**
   * Get the name.
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name.
   * @param {string} value
   * @returns {void}
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Get the commander name.
   * @returns {string}
   */
  get commanderName() {
    return this._name;
  }

  /**
   * Set the commander name.
   * @param {string} value
   * @returns {void}
   */
  set commanderName(value) {
    this._commanderName = value;
  }

  /**
   * Get the lifetotal.
   * @returns {number}
   */
  get lifetotal() {
    return this._lifetotal;
  }

  /**
   * Set the lifetotal.
   * @param {number|string} value
   * @returns {void}
   */
  set lifetota(value) {
    this._lifetotal = toNumber(value);
  }

  /**
   * Increase the player's lifetotal by amount.
   * @param {number} amount
   * @returns {number}
   */
  heal(amount = 1) {
    this.lifetotal = this.lifetotal + toSafeInteger(amount);
    return this.lifetotal;
  }

  /**
   * Decrease the player's lifetotal by amount.
   * @param {number} amount
   * @returns {number}
   */
  takeDamage(amount = 1) {
    this.lifetotal = this.lifetotal - toSafeInteger(amount);
    return this.lifetotal;
  }

  /**
   * Get the counter.
   * @returns {Object}
   */
  get counter() {
    return this._counter;
  }

  /**
   * Set the counter.
   * @param {Object} value
   * @returns {void}
   */
  set counter(value) {
    this._counter = value;
  }

  /**
   * Get the poison counter.
   * @returns {number}
   */
  get poison() {
    return this._counter.poison;
  }

  /**
   * Set the poison counter.
   * @param {number|string} value
   * @returns {void}
   */
  set poison(value) {
    this._counter.poison = toSafeInteger(value);
  }

  /**
   * Get the colors.
   * @returns {Array}
   */
  get colors() {
    return this._colors;
  }

  /**
   * Set the colors.
   * @param {Array} value
   * @returns {void}
   */
  set colors(value) {
    this._colors = value;
  }
}

export default Player;
