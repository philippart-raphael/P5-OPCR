import API from "./modules/api/Api.js";
import ViewProduct from "./modules/view/ViewProduct.js";
import EventAddProduct from "./modules/event/EventAddProduct.js";

const api = new API();

const urlParams = new URLSearchParams(window.location.search);
const isIdParam = urlParams.has('id');

if (isIdParam) {
  const idParam = urlParams.get('id');
  api.getAPIProduct(idParam)
    .then(product => {
      new ViewProduct(product);
      new EventAddProduct(idParam);
    })
    .catch(e => window.location.replace('/'));
}
