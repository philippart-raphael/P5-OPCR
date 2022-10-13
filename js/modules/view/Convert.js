export default class Convert {
  static convertCurrency(number) {
    // noinspection JSCheckFunctionSignatures
    return number.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
  }
}
