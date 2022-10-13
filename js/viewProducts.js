import API from "./modules/api/Api.js";
import ViewProducts from "./modules/view/viewProducts.js";

const itemsDOM = document.querySelector('#items');
const errorMessage = 'Désolé nos produits sont indisponible, Merci de repasser plus tard !';
let api = new API();

api.getAPIProduct()
  .then(allProducts => new ViewProducts(allProducts))
  .catch(e => itemsDOM.innerHTML = errorMessage);
