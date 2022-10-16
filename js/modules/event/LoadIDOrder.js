export default class LoadIDOrder {
  queryString = window.location.search;
  orderId = document.querySelector('#orderId');

  /**
   * Get ID Order in URL and render in DOM
   */
  constructor() {
    this.urlParams = new URLSearchParams(this.queryString);

    if (this.urlParams.has('order')) {
      this.orderId.innerText = this.urlParams.get('order');
    }
  }
}
