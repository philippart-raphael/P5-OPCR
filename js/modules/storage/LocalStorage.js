export default class LocalStorage {
  #storage = 'products';

  set localStorage(data) {
    localStorage.setItem(this.#storage, JSON.stringify(data));
  }

  get localStorage() {
    return localStorage.getItem(this.#storage);
  }

  deleteLocalStorage() {
    localStorage.removeItem(this.#storage);
  }
}
