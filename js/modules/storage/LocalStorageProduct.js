import ValidatorEventAddProduct from "../validator/ValidatorEventAddProduct.js";

export default class LocalStorageProduct extends ValidatorEventAddProduct {
  /**
   * Add Product in localStorage
   * @param product
   */
  constructor(product) {
    super();
    this._product = product;
    this.addDataLocalStorage();
  }

  /**
   * add data in local storage
   */
  addDataLocalStorage() {
    if (this.localStorage) {
      let cartLocalStorage = JSON.parse(this.localStorage);
      let cart;

      if (cartLocalStorage.find(p => p._id === this._product._id && p.color === this._product.color)) {
        // Product find in Cart
        cart = cartLocalStorage.map(product => {
          if (product._id === this._product._id && product.color === this._product.color) {
            if (this.validTotal(this._product.total + parseInt(product.total))) {
              product.total = this._product.total + parseInt(product.total);
              this.viewError('Produit ajouter a votre panier !');
            } else {
              this.viewError(`Total invalide, vous avez déjà ${product.total} produit identique dans votre panier !`);
            }
          }
          return product;
        });
        this.localStorage = cart;
      } else {
        cartLocalStorage.push(this._product);
        this.localStorage = cartLocalStorage;
        this.viewError('Produit ajouter a votre panier !');
      }
    } else {
      this.localStorage = [this._product];
      this.viewError('Produit ajouter a votre panier !');
    }
  }
}
