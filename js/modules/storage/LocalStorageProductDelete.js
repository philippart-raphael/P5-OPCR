import ViewCart from "../view/ViewCart.js";
import LocalStorage from "./LocalStorage.js";

export default class LocalStorageProductDelete extends LocalStorage{
  #storage = 'products';

  constructor(product) {
    super();
    const newCart = [];
    this.oldLocalStorage = JSON.parse(this.localStorage);

    this.oldLocalStorage.forEach(p => {
      if (p._id === product._id && p.color === product.color) {
      } else {
        newCart.push(p);
      }
    });

    this.deleteLocalStorage();
    this.localStorage = newCart;
    new ViewCart();
  }
}
