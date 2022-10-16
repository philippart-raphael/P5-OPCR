/**
 * Localstorage management
 */
export default class LocalStorage {
  #storage = 'products';

  /**
   * Set product in localStorage
   * @param data
   */
  set localStorage(data) {
    localStorage.setItem(this.#storage, JSON.stringify(data));
  }

  /**
   * Get product in localStorage
   * @returns {string}
   */
  get localStorage() {
    return localStorage.getItem(this.#storage);
  }

  /**
   * Delete product in localStorage
   */
  deleteLocalStorage() {
    localStorage.removeItem(this.#storage);
  }

  /**
   * Clear localStorage
   */
  clearLocalStorage() {
    localStorage.removeItem(this.#storage);
  }
}
