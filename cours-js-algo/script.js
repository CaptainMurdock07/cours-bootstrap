"use strict";

var cl = console.log;

function direBonjour() {
    // alert("Hello");
    // var reponse = prompt("Etes vous d'accourd ?");
    // console.log(reponse);
    // var x = 2;
    // console.log(x, typeof (x));
    // x = "bonjour";
    // console.log(x, typeof x)
    // var x = 2;
    // var z = "2";
    // console.log(typeof x, typeof z);
    // var a;
    // console.log(typeof a);
    // console.log(typeof macron);
    // console.log(x + z);
    // var y = 5;
    // console.log(x + y + z);
    // console.log(z * 10);
    // console.log('a' * 10);
    // var b = true;
    // console.log(x + b);
    // console.log(typeof z);
    // var t = parseFloat(z);
    // console.log(typeof t);
    // var objet = { nom: "wick", prenom: "john" };
    // console.log(objet.nom, objet['prenom']);
    // if (x > 0) {
    //     console.log(x, "est positif");
    // } else {
    //     console.log(x, "est négatif");
    // }
    // var x = +prompt("Valeur de x :");
    // console.log(x, typeof x);
    // var y = +prompt("Valeur de y :");
    // console.log(y, typeof y);
    // var op = prompt("Veuillez saisir un opérateur (+, -, * ou /) :");
    // console.log(x + y, typeof (x + y));
    // alert(x + y);
    // ES6 String template
    // alert(`${x}` + `${y}` = `${x + y}`);
    // if (op == "+") {
    //     var resultat = x + y;
    //     console.log(x + y, typeof (x + y));
    // } else if (op == "-") {
    //     var resultat = x - y;
    //     console.log(x - y, typeof (x - y));
    // } else if (op == "*") {
    //     var resultat = x * y;
    //     console.log(x * y, typeof (x * y));
    // }else if (op == "/") {
    //     var resultat = x / y;
    //     console.log(x / y, typeof (x / y));
    // } else {
    //     var resultat = "Erreur : opérateur inconnu!";
    // }
    // alert(`${x} ${op} ${y}` = `${resultat}`);
    // switch (op) {
    //     case "+":
    //         var resultat = x + y;
    //         break;
    //     case "-":
    //         var resultat = x - y;
    //         break;
    //     case "*":
    //         var resultat = x * y;
    //         break;
    //     case "/":
    //         var resultat = x / y;
    //         break;
    //     default:
    //         var resultat = "Erreur : opérateur inconnu!";
    //         break;
    // }
    // alert(`${x}` + `${y}` = `${resultat}`);
    // var expression = `${x} ${op} ${y}`;
    // var resultat = eval(expression);
    // alert(`${expression} = ${resultat}`);
    //  for(let i =0; i <= 10; i+= 2) {
    //       if (i % 2 == 0) {
    //      console.log(i);
    //       }
    //       i = i + 1;
    //  }
    // let i = 0;
    // while (i <= 10) {
    //         if (i % 2 == 0) {
    //     console.log(i);
    //         }
    //     // i = i + 1;
    //     i+= 2;
    // }
    // do {
            // if (i % 2 ) {
    //     console.log(i);
            // }
    //     //i = i + 1;
    //     i+= 2;
    // } while (i <= 10);
    var tableau = [2, 3, 8, 5];
    // console.log(tableau.length);
    // console.log(tableau[0]);
    //  var elm = tableau.length - 1;
    //  console.log(tableau[elm]);
    // console.log(tableau[tableau.length - 1]);
    // for (let i = 0; i < tableau.length; i++) {
    //     console.log(tableau[i]);
    // }
    // for (const elt of tableau) {
    //     console.log(elt);
    // }
    // var somme = 0;
    // for (let i = 0; i < tableau.length; i++) {
    //     somme += tableau[i];
    // }
    // for (const elt of tableau) {
    //     somme += elt;
    // }
    // console.log(somme);
    var marques = ['peugeot', 'citroen', 'mercedes', 'fiat'];
    // for (let i = 0; i < marques.length; i++) {
    //     somme += marques[i.length];
        
    // }
    // for (const elt of marques) {
    //     somme += elt.length;
    // }
    // console.log(somme);
    // let i = 0;
    // while ()
    var tableau2 = [-2, -3, -8, -5];
    var max = tableau2[0];
    // for (const elt of tableau2) {
    //     if (max < elt) {
    //         max = elt;
    //     } else {
    //         console.log(max);
    //     }
    // }
    // cl(somme(2, 5, 1, 6, 9));
    // cl(somme(2, 5, 7));
    // cl(somme(2, 5));
    // cl(somme(2));
    // cl(somme());
    // x = 2;
    // cl(x);
    // var x;
    // cl(produit(5, 3));
    cl(longest('lyon', 'marseille', 'nice'));
}
// function produit(a, b) {
//     return a * b;
// }

// JS : Arrow function, Java : Lamba Expression
// var produit = (a, b) => a * b;
// var produit = (...values) => {
//     var prod = 1;
//     for (const elt of values) {
//         prod *=  elt;
//     }
//     return prod;
// }
var longest = (...values) => {
    var max = values[0];
    for (const val of values) {
        if (max.length < val.length) {
            max = val;
        } 
    }
    return max;
}

// function somme(a, b) {
//     return a + b;
// }
// function somme(...values) {
//     var resultat = 0;
//     for (const elt of values) {
//         resultat += elt;
//     }
//     return resultat;
// }
// var somme = function (...values) {
//          var resultat = 0;
//          for (const elt of values) {
//              resultat += elt;
//          }
//          return resultat;
//      }