export default class ViewProduct {
  item__img = document.querySelector('.item__img');
  title = document.querySelector('#title');
  price = document.querySelector('#price');
  description = document.querySelector('#description');
  colors = document.querySelector('#colors');

  constructor(product) {
    this.makeImgProduct(product);
    this.makeTitle(product.name);
    this.makePrice(product.price);
    this.makeDescriptionProduct(product.description);
    this.makeOptionColor(product.colors);
  }

  /**
   * create image product
   * @param product
   **/
  makeImgProduct(product) {
    let img = document.createElement('img');
    img.setAttribute('src', product.imageUrl);
    img.setAttribute('alt', product.altTxt);
    this.item__img.appendChild(img);
  }

  /**
   * create title product
   * @param title
   **/
  makeTitle(title) {
    document.title = title;
    this.title.innerText = title;
  }

  /**
   * create price product
   * @param price
   **/
  makePrice(price) {
    this.price.innerText = price;
  }

  /**
   * create description product
   * @param description
   **/
  makeDescriptionProduct(description) {
    this.description.innerText = description;
  }

  /**
   * create options product
   * @param colors
   **/
  makeOptionColor(colors) {
    for (const color of colors) {
      let option = document.createElement('option');
      option.setAttribute('value', color);
      option.innerText = color;
      this.colors.appendChild(option);
    }
  }
}
