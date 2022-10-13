export default class ViewProducts {
  items = document.querySelector('#items');

  constructor(listProducts) {
    for (const product of listProducts) {
      this.formatHTMLItem(
        this.makeLink(product._id),
        this.makeImage(product.imageUrl, product.altTxt),
        this.makeTitle(product.name),
        this.makeBody(product.description)
      );
    }
  }

  /**
   * create view HTML
   * @param a
   * @param img
   * @param title
   * @param p
   **/
  formatHTMLItem(a, img, title, p) {
    let article = document.createElement('article');
    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(p);
    a.appendChild(article);
    this.appendChildItem(a);
  }

  /**
   * AppendChild Item
   * @param item
   **/
  appendChildItem(item) {
    this.items.appendChild(item);
  }

  /**
   * create link product
   * @return { HTMLAnchorElement }
   * @param id
   **/
  makeLink(id) {
    let a = document.createElement('a');
    a.setAttribute('href', `./product.html?id=${id}`);
    return a;
  }

  /**
   * create image width alt-text product
   * @return { HTMLImageElement }
   * @param src
   * @param altText
   **/
  makeImage(src, altText) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', altText);
    return img;
  }

  /**
   * create title product
   * @return { HTMLHeadingElement }
   * @param name
   **/
  makeTitle(name) {
    let title = document.createElement('h3');
    title.classList.add('productName');
    title.innerText = name;
    return title;
  }

  /**
   * create description product
   * @return { HTMLParagraphElement }
   * @param description
   **/
  makeBody(description) {
    let p = document.createElement('p');
    p.classList.add('productDescription');
    p.innerText = `${description.slice(0, 30)}...`;
    return p;
  }
}
