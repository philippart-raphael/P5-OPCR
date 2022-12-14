import LocalStorageLoad from "../storage/LocalStorageLoad.js";
import Api from "../api/Api.js";
import Convert from "./Convert.js";
import ViewTotalCart from "./ViewTotalCart.js";
import EventUpdateCart from "../event/EventUpdateCart.js";
import EventDeleteCart from "../event/EventDeleteCart.js";
import EventSubmitOrder from "../event/EventSubmitOrder.js";

export default class ViewCart extends LocalStorageLoad {
  #cartItems = document.querySelector('#cart__items');
  #cartPrice = document.querySelector('.cart__price');
  #cartOrder = document.querySelector('.cart__order');
  #cartTitle = document.querySelector('#cartTitle');

  constructor() {
    super();
    this.localStorageLOAD = this.load();

    if (!this.localStorageLOAD) {
      this.#cartPrice.innerHTML = '';
      this.#cartOrder.innerHTML = '';
      this.#cartTitle.innerHTML = 'Votre panier est vide !';
    }
    else {
      this.#cartItems.innerHTML = '';
      this.viewTotalCart = new ViewTotalCart();
      const api = new Api();
      this.localStorageLOAD.forEach(productCart => {
        api.getAPIProduct(productCart._id)
          .then(productAPI => {
            this.viewCart(productCart, productAPI);
            new EventUpdateCart();
            new EventDeleteCart();
          })
          .catch(e => console.error(e));
      });
      new EventSubmitOrder();
    }
  }

  currency(number) {
    return Convert.convertCurrency(number);
  }

  viewCart(productCart, productAPI) {
    let formatViewDetailProductPrice;
    if (productCart.total <= 1) {
      formatViewDetailProductPrice = `${this.currency(productCart.total * productAPI.price)}`;
    } else {
      formatViewDetailProductPrice = `${productCart.total} x ${this.currency(productAPI.price)} = ${this.currency(productCart.total * productAPI.price)}`;
    }

    const templateHTML = `
        <article class="cart__item" data-id="${productCart._id}" data-color="${productCart.color}">
            <div class="cart__item__img">
                <img src="${productAPI.imageUrl}" alt="${productAPI.altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${productAPI.name}</h2>
                    <p>${productCart.color}</p>
                    <p>${formatViewDetailProductPrice}</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qt?? : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productCart.total}" id="itemUpdated-${productCart._id}-${productCart.color}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
        </article>`
    this.#cartItems.innerHTML += templateHTML;
    this.viewTotalCart.addProductToCart(productCart.total, (productCart.total * productAPI.price));
  }
}
