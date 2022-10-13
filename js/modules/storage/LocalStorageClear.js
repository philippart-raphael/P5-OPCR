import LocalStorage from "./LocalStorage.js";

export default class LocalStorageClear extends LocalStorage{
  constructor() {
    super();
    this.clearLocalStorage();
  }
}
