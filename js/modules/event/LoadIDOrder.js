export default class LoadIDOrder {
  queryString = window.location.search;
  orderId = document.querySelector('#orderId');

  constructor() {
    this.urlParams = new URLSearchParams(this.queryString);

    if (this.urlParams.has('order')) {
      this.orderId.innerText = this.urlParams.get('order');
    }
  }
}
