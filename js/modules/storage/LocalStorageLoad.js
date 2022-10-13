import LocalStorage from "./LocalStorage.js";

export default class LocalStorageLoad extends LocalStorage {
  constructor() {
    super();
  }

  load() {
    if (this.localStorage) {
      return JSON.parse(this.localStorage);
    } else {
      return false;
    }
  }
}
