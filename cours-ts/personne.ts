import { Adresse } from "./adresse";
import { MiseEnForme } from "./mise-en-forme";

export class Personne implements MiseEnForme {

    constructor(private _num: number=0, private _nom: string="", private _prenom: string="", private _adresse: Adresse|null = null) {
    
    }

    get num() {
        return this._num;
    }
    set num(valeur: number) {
        this._num = valeur;
    }
    get nom() {
        return this._nom;
    }
    set nom(valeur: string) {
        this._nom = valeur;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(valeur: string) {
        this._prenom = valeur;
    }
    get adresse() {
        return this._adresse;
    }
    set adresse(valeur: Adresse|null) {
        this._adresse = valeur;
    }
    
    afficherNomEnMajuscule(): void {
        console.log(this.nom.toUpperCase());
        
    }
    afficherPrenomEnMajuscule(): void {
        console.log(this.prenom.toUpperCase());
        
    }
}