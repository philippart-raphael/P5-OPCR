import Product from "../entity/Product.js";
import ValidatorEventAddProduct from "../validator/ValidatorEventAddProduct.js";
import LocalStorageProductUpdate from "../storage/LocalStorageProductUpdate.js";
import ViewCart from "../view/ViewCart.js";

export default class EventUpdateCart extends ValidatorEventAddProduct {
  /**
   * get Values product
   */
  constructor() {
    super();
    this.selectorDOM = document.querySelectorAll('.itemQuantity');
    this.init();
  }

  /**
   * initialize event
   */
  init() {
    this.selectorDOM.forEach(element => {
      element.addEventListener('change', ev => {
        const node = ev.target.parentNode.parentNode.parentNode.parentNode;
        const id = node.getAttribute('data-id');
        const color = node.getAttribute('data-color');
        const newTotal = ev.target.value;

        const product = new Product(id, newTotal, color);

        if (!this.validTotal(newTotal)) {
          this.viewError('Total invalid !', ev.target.parentNode);
        } else {
          new LocalStorageProductUpdate(product);
          new ViewCart();
        }
      }, false);
    });
  }
}
