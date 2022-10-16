export default class Error {
  color = '#FFF';
  time = 5000;

  /**
   * Displays an error in the dom
   * @param elementDOM
   * @param error
   */
  constructor(elementDOM, error) {
    this.elementDOM = elementDOM;
    this.error = error;
    this.init();
  }

  /**
   * View Error in HTML
   */
  init() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.setAttribute('style', `color:${this.color};`);
    span.innerHTML = this.error;
    div.appendChild(span);
    this.elementDOM.appendChild(div);
    this.removeAlert(div);
  }

  /**
   * Remove Error alert after 5000ms
   * @param { HTMLDivElement } element
   */
  removeAlert(element) {
    setTimeout(() => element.remove(), this.time);
  }
}
