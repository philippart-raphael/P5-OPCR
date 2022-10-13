import Error from "./../error/Error.js";
import LocalStorage from "../storage/LocalStorage.js";

export default class ValidatorEventAddProduct extends LocalStorage {
  #maximumQuantity = 100;
  #regExpColor = new RegExp(/^\W*$/);

  validTotal(valueProduct) {
    // Valid String is not empty
    if (valueProduct === ' ') {
      return false;
    }
    // Valid ParseInt
    else if (!parseInt(valueProduct)) {
      return false;
    }
    // Valid Quantity products
    else if (valueProduct > this.#maximumQuantity) {
      return false;
    } else {
      return parseInt(valueProduct);
    }
  }

  validColor(colors) {
    return this.#regExpColor.test(colors);
  }

  viewError(message, elementDOM) {
    elementDOM ? new Error(elementDOM, message) : new Error(document.querySelector('.item__content__settings__quantity'), message);
  }
}
