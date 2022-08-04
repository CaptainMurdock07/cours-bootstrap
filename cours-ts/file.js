"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {somme} from './fonctions';
const personne_1 = require("./personne");
const adresse_1 = require("./adresse");
let personne = new personne_1.Personne();
personne.num = 100;
personne.nom = 'wick';
personne.prenom = 'john';
let adr = new adresse_1.Adresse();
adr.rue = 'rue du paradis';
adr.code_postal = '06';
adr.ville = 'Antibes';
personne.adresse = adr;
console.log(personne);
let personne2 = new personne_1.Personne(200, "dalton", "jack", adr);
console.log(personne2);
personne2.afficherNomEnMajuscule();
personne2.afficherPrenomEnMajuscule();
let person = { num: 300, nom: "maggio", prenom: "candice" };
console.log(person);
let person2 = { num: 300, nom: "baggio" };
console.log(person2);
// var str: unknown = "Hello World !";
// str = 3;
// str = true;
// var b: unknown = str;
// console.log(b, typeof b);
// var lastname: string | null = 'wick';
// var nom: string;
// // if (lastname == null || lastname == undefined) {
// //     nom = 'doe'
// // } else {
// //     nom = lastname;
// // }
// nom = lastname ?? 'doe';
// console.log(nom);
// function somme(a: number = 0,  b: number = 0) {
//     return a + b;
// }
// console.log(somme(2, 5));
// console.log(somme(2));
// console.log(somme());
//var nombres: Array<number> = [];
var nombres = [2, 3, 8, 5];
// for (let index = 0; index < nombres.length; index++) {
//     const element = nombres[index];
//     console.log(element);
//}
// console.table(nombres);
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);
// }
// for (const elt of nombres) {
//     console.log(elt);
// }
//nombres.forEach(elt => console.log(elt));
// nombres
//     .filter(elt => elt % 2 == 0)
//     .forEach(elt => console.log(elt));
// nombres
//     .map(elt => elt + 2)
//     .forEach(elt => console.log(elt));
