import Convert from "./Convert.js";

export default class ViewTotalCart {
  constructor() {
    this.total = 0;
    this.price = 0;
  }

  addProductToCart(total, price) {
    this.total += total;
    this.price += price;
    this.viewTotalCart();
  }

  viewTotalCart() {
    document.querySelector('#totalQuantity').innerText = this.total;
    document.querySelector('#totalPrice').innerText = this.convertCurrency(this.price);
  }

  convertCurrency(number) {
    return Convert.convertCurrency(number);
  }
}
