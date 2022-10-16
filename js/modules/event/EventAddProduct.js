import ValidatorEventAddProduct from "../validator/ValidatorEventAddProduct.js";
import Product from "../entity/Product.js";
import LocalStorageProduct from "../storage/LocalStorageProduct.js";

export default class EventAddProduct extends ValidatorEventAddProduct {
  formItemQuantity = document.querySelector('#itemQuantity');
  formColors = document.querySelector('#colors');
  formButton = document.querySelector('#addToCart');

  /**
   * Event Add Product in Cart
   * @param id
   */
  constructor(id) {
    super();
    this._id = id;
    this.initEvent();
  }

  /**
   * initialize event
   **/
  initEvent() {
    this.formButton.addEventListener('click', () => {
      this.validDataForm();
    });
  }

  /**
   * get Values product
   **/
  validDataForm() {
    const validColor = this.validColor(this.formColors.value);
    const validQuantity = this.validTotal(this.formItemQuantity.value);

    if (validColor) {
      this.viewError('Vous devez sélectionner une couleur !');
    }
    if (!validQuantity) {
      this.viewError('Le total d\'articles est invalide !');
    }

    if (!validColor && validQuantity) {
      const product = new Product(this._id, this.formItemQuantity.value, this.formColors.value);
      new LocalStorageProduct(product);
    }
  }
}
