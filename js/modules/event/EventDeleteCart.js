import LocalStorageProductDelete from "../storage/LocalStorageProductDelete.js";
import Product from "../entity/Product.js";

export default class EventDeleteCart {
  /**
   * Event Delete Product in Cart
   */
  constructor() {
    this.selectorDOM = document.querySelectorAll('.deleteItem');

    this.selectorDOM.forEach(element => {
      element.addEventListener('click', ev => {
        const node = ev.target.parentNode.parentNode.parentNode.parentNode;
        const id = node.getAttribute('data-id');
        const color = node.getAttribute('data-color');

        const product = new Product(id, '0', color);

        new LocalStorageProductDelete(product);

      }, false);
    });
  }
}
