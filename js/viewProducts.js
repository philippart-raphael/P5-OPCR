import API from "./modules/api/Api.js";
import ViewProducts from "./modules/view/viewProducts.js";

let products = new API();

products.getAPIProduct()
  .then(allProducts => new ViewProducts(allProducts))
  .catch(e => console.error(e));
