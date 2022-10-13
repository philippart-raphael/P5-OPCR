import ValidatorEventAddProduct from "../validator/ValidatorEventAddProduct.js";

export default class LocalStorageProductUpdate extends ValidatorEventAddProduct {
  constructor(product) {
    super();
    this._product = product;
    this.updateDataLocalStorage();
  }

  updateDataLocalStorage() {
    if (this.localStorage) {
      let cartLocalStorage = JSON.parse(this.localStorage);
      let cart;

      if (cartLocalStorage.find(p => p._id === this._product._id && p.color === this._product.color)) {
        cart = cartLocalStorage.map(product => {
          if (product._id === this._product._id && product.color === this._product.color) {
            if (this.validTotal(this._product.total)) {
              product.total = this._product.total;
            } else {
              console.log('OK')
              this.viewError('Total invalide !', document.querySelector('.cart__item__content__settings__quantity'));
            }
          }
          return product;
        });
        this.localStorage = cart;
      }
    }
  }
}
