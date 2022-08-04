export class Adresse {
    constructor (private _rue: string = "", private _code_postal: string = "", private _ville: string = "") {

    }

    get rue() {
        return this._rue;
    }
    set rue(valeur: string) {
        this._rue = valeur;
    }
    get code_postal() {
        return this._code_postal;
    }
    set code_postal(valeur: string) {
        this._code_postal = valeur;
    }
    get ville() {
        return this._ville;
    }
    set ville(valeur: string) {
        this._ville = valeur;
    }
}
