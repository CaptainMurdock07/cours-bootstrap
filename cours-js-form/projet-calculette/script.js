// function calculerSomme() {
//     let input1 = document.getElementById('valeur1');
//     // let a = parseFloat(input1);
//     let input2 = document.getElementById('valeur2');
//     // let b = parseFloat(input2);
//     let res = (input1.value) + (input2.value);
//     alert(`res = ${res}`);
// }
// function somme() {
//     let input1 = document.getElementById('valeur1');
//     let input2 = document.getElementById('valeur2');
//     // let resultat = parseFloat(input1.value) + parseFloat(input2.value);
//     let resultat = Number(input1.value) + Number(input2.value);
//     // alert(`${input1.value} + ${input2.value} = ${resultat}`);
//     let afficheur = document.getElementById('afficheur');
//     afficheur.innerHTML = `${input1.value} + ${input2.value} = ${resultat}`;
// }
// function moins() {
//     let input1 = document.getElementById('valeur1');
//     let input2 = document.getElementById('valeur2');
//     let resultat = Number(input1.value) - Number(input2.value);
//     // alert(`${input1.value} - ${input2.value} = ${resultat}`);
//     let afficheur = document.getElementById('afficheur');
//     afficheur.innerHTML = `${input1.value} - ${input2.value} = ${resultat}`;
// }
// function produit() {
//     let input1 = document.getElementById('valeur1');
//     let input2 = document.getElementById('valeur2');
//     let resultat = Number(input1.value) * Number(input2.value);
//     // alert(`${input1.value} x ${input2.value} = ${resultat}`);
//     let afficheur = document.getElementById('afficheur');
//     afficheur.innerHTML = `${input1.value} x ${input2.value} = ${resultat}`;
// }
// function division() {
//     let input1 = document.getElementById('valeur1');
//     let input2 = document.getElementById('valeur2');
//     let resultat = Number(input1.value) / Number(input2.value);
//     // alert(`${input1.value} / ${input2.value} = ${resultat}`);
//     let afficheur = document.getElementById('afficheur');
//     afficheur.innerHTML = `${input1.value} / ${input2.value} = ${resultat}`;
// }
function calculer(op) {
    let input1 = document.getElementById('valeur1');
    let input2 = document.getElementById('valeur2');
    // let resultat = parseFloat(input1.value) + parseFloat(input2.value);
    //  let resultat = Number(input1.value) + Number(input2.value);
    // eval : permet d'évaleur une chaîne de caractères comme une expression arithmétique
    let resultat = eval(input1.value + op + input2.value);
    // alert(`${input1.value} + ${input2.value} = ${resultat}`);
    let afficheur = document.getElementById('afficheur');
    // afficheur.innerHTML = `${input1.value} + ${input2.value} = ${resultat}`;
    afficheur.innerHTML = `${input1.value} ${op} ${input2.value} = ${resultat}`;
}
function check() {
    let input1 = document.getElementById('valeur1');
    let input2 = document.getElementById('valeur2');
    let buttons = document.querySelectorAll('button');
    if (input1.value != "" && input2.value != "") {
        for (const button of buttons) {
            button.removeAttribute('disabled');
        }
    }
    else {
        for (const button of buttons) {
            button.setAttribute('disabled', 'disabled');
        }
    }
}