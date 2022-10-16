import ValidatorDataPOST from "../validator/ValidatorDataPOST.js";
import api from "../api/Api.js";
import ProductIDForOrder from "../entity/ProductIDForOrder.js";
import LocalStorageClear from "../storage/LocalStorageClear.js";
import Api from "../api/Api.js";

export default class EventSubmitOrder {
  cartOrder = document.querySelector('#order');

  /**
   * Event Submit Order
   */
  constructor() {
    this.cartOrder.addEventListener('click', async e => {
      e.preventDefault();

      const firstName = document.querySelector('#firstName');
      const lastname = document.querySelector('#lastName');
      const address = document.querySelector('#address');
      const city = document.querySelector('#city');
      const email = document.querySelector('#email');
      const firstNameErrorDOM = document.querySelector('#firstNameErrorMsg');
      const lastnameErrorDOM = document.querySelector('#lastNameErrorMsg');
      const addressErrorDOM = document.querySelector('#addressErrorMsg');
      const cityErrorDOM = document.querySelector('#cityErrorMsg');
      const emailErrorDOM = document.querySelector('#emailErrorMsg');

      /**
       * @type {{firstName, lastName, address, city, email}}
       */
      const dataForm = {
        firstName: firstName.value,
        lastName: lastname.value,
        address: address.value,
        city: city.value,
        email: email.value,
      }
      /**
       * @type {ValidatorDataPOST}
       */
      const errors = new ValidatorDataPOST(dataForm);

      if (errors) {
        if (errors.firstName) {
          firstNameErrorDOM.innerText = errors.firstName
        } else {
          firstNameErrorDOM.innerText = '';
        }
        if (errors.lastName) {
          lastnameErrorDOM.innerText = errors.lastName
        } else {
          lastnameErrorDOM.innerText = '';
        }
        if (errors.address) {
          addressErrorDOM.innerText = errors.address
        } else {
          addressErrorDOM.innerText = '';
        }
        if (errors.city) {
          cityErrorDOM.innerText = errors.city
        } else {
          cityErrorDOM.innerText = '';
        }
        if (errors.email) {
          emailErrorDOM.innerText = errors.email
        } else {
          emailErrorDOM.innerText = '';
        }
      }

      if (Object.keys(errors).length === 0) {
        const productIDs = new ProductIDForOrder();
        const api = new Api();
        const dataPost = {
          contact: {
            ...dataForm
          },
          products: productIDs
        }
        api.postAPIOrder(dataPost)
          .then(idOrder => {
            window.location.replace(`confirmation.html?order=${idOrder.orderId}`);
            new LocalStorageClear();
          })
      }
    }, false);
  }
}
