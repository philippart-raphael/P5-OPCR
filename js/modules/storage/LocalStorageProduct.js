import ValidatorEventAddProduct from "../validator/ValidatorEventAddProduct.js";

export default class LocalStorageProduct extends ValidatorEventAddProduct {
  #storage = 'products';

  constructor(product) {
    super();
    this._product = product;
    this.addDataLocalStorage();
  }

  addDataLocalStorage() {
    if (localStorage.getItem(this.#storage)) {
      let cartLocalStorage = JSON.parse(this.localStorage);
      let cart;

      if (cartLocalStorage.find(p => p._id === this._product._id && p.color === this._product.color)) {
        cart = cartLocalStorage.map(product => {
          if (product._id === this._product._id && product.color === this._product.color) {
            if (this.validTotal(this._product.total + parseInt(product.total))) {
              product.total = this._product.total + parseInt(product.total);
              this.viewError('Produit ajouter a votre panier !');
            } else {
              this.viewError('Total invalide !');
            }
          }
          return product;
        });
        this.localStorage = cart;
      } else {
        cartLocalStorage.push(this._product);
        this.localStorage = cartLocalStorage;
      }
    } else {
      this.localStorage = [this._product];
    }
  }

  set localStorage(data) {
    localStorage.setItem(this.#storage, JSON.stringify(data));
  }

  get localStorage() {
    return localStorage.getItem(this.#storage);
  }
}
