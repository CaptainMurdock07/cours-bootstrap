"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(_num = 0, _nom = "", _prenom = "", _adresse = null) {
        this._num = _num;
        this._nom = _nom;
        this._prenom = _prenom;
        this._adresse = _adresse;
    }
    get num() {
        return this._num;
    }
    set num(valeur) {
        this._num = valeur;
    }
    get nom() {
        return this._nom;
    }
    set nom(valeur) {
        this._nom = valeur;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(valeur) {
        this._prenom = valeur;
    }
    get adresse() {
        return this._adresse;
    }
    set adresse(valeur) {
        this._adresse = valeur;
    }
    afficherNomEnMajuscule() {
        console.log(this.nom.toUpperCase());
    }
    afficherPrenomEnMajuscule() {
        console.log(this.prenom.toUpperCase());
    }
}
exports.Personne = Personne;
