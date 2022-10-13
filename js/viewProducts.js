import API from "./modules/api/Api.js";

let products = new API();

products.getAPIProduct()
    .then(allProducts => console.log(allProducts))
    .catch(e => console.error(e));
