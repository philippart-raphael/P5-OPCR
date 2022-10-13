export default class ValidatorDataPOST {
  /**
   * Validator UserName
   * @param { { String } } data
   */
  constructor(data) {
    this.errors = {};
    this.regExpNumber = new RegExp(/\d+/g);
    this.regExpEmail = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);


    for (const [key, value] of Object.entries(data)) {
      if (!value) {
        this.errors[key] = `Erreur: Veuillez remplir ce formulaire !`;
      } else {
        if (key === 'firstName') {
          if (this.regExpNumber.test(value)) {
            this.errors[key] = `Erreur: Pas de chiffre dans votre Prénom !`;
          }
        }
        if (key === 'lastName') {
          if (this.regExpNumber.test(value)) {
            this.errors[key] = `Erreur: Pas de chiffre dans votre Nom !`;
          }
        }
        if (key === 'email') {
          if (!this.regExpEmail.test(value)) {
            this.errors[key] = `Erreur: Email invalide !`;
          }
        }
      }
    }
    return this.errors;
  }
}
