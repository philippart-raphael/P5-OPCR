import LocalStorage from "../storage/LocalStorage.js";

export default class ProductIDForOrder extends LocalStorage {
  #storage = 'products';

  constructor() {
    super();
    const cart = JSON.parse(this.localStorage);
    let productIDs = [];

    cart.forEach(e => {
      productIDs.push(e._id);
    });

    return productIDs;
  }
}
