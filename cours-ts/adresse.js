"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
class Adresse {
    constructor(_rue = "", _code_postal = "", _ville = "") {
        this._rue = _rue;
        this._code_postal = _code_postal;
        this._ville = _ville;
    }
    get rue() {
        return this._rue;
    }
    set rue(valeur) {
        this._rue = valeur;
    }
    get code_postal() {
        return this._code_postal;
    }
    set code_postal(valeur) {
        this._code_postal = valeur;
    }
    get ville() {
        return this._ville;
    }
    set ville(valeur) {
        this._ville = valeur;
    }
}
exports.Adresse = Adresse;
