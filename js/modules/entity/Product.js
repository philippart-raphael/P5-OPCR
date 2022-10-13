export default class Product {
  /**
   * @param { String } id
   * @param { String } total
   * @param { String } color
   */
  constructor(id, total, color) {
    this._id = id;
    this.color = color;
    this.total = parseInt(total);
  }
}
