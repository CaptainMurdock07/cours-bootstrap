// var conteneur =  document.getElementById('container');
// console.log(conteneur.innerHTML);
// console.log(conteneur.id);
// console.log(conteneur.value);
// var rouges = document.getElementsByClassName('rouge');
// for (const elt of rouges) {
//     console.log(elt.innerHTML);
// }
// var paragraphes = document.getElementsByTagName('p');
// for (const p of paragraphes) {
//     console.log(p.innerHTML);
// }
// var prouges = document.querySelectorAll('p.rouge')
// for (const elt of prouges) {
//     console.log(elt.innerHTML)
// }
// var prouge = document.querySelector('p.rouge');
// console.log(prouge);
function afficherLien() {
    var lien = document.querySelector('a');
    // var href = lien.getAttribute('href');
    // console.log(href);
    console.log(lien.href);
}
function modifierLien() {
    var lien = document.querySelector('a');
    // lien.setAttribute('href', "http://www.franceinfo.fr");
    lien.href = "http://www.franceinfo.fr";
}
function modifierClasse() {
    let p = document.querySelector('p');
    // récupérer l'objet classe
    let classes = p.classList;
    // supprimer la classe rouge
    classes.remove('rouge');
    // ajouter la classe vert et gras
    classes.add('vert', 'gras');
    // tester la présence d'une classe
    console.log("Vert : ", classes.contains('vert'));
    console.log("Bleu : ", classes.contains('bleu'));
    // remplacer une classe
    classes.replace('vert', 'bleu');
    classes.toggle('bleu');
    classes.toggle('jaune');
}
function permuterCouleur() {
    let paragraphes = document.querySelectorAll('p');
    for (const p of paragraphes) {
        let classes = p.classList;
        if (classes.contains('rouge')) {
            classes.replace('rouge', 'bleu');
            console.log("Rouge : ", classes.contains('rouge'));
            console.log("Bleu : ", classes.contains('bleu'));
        } else if (classes.contains('bleu')) {
            classes.replace('bleu', 'vert');
            console.log("Bleu : ", classes.contains('bleu'));
            console.log("Vert : ", classes.contains('vert'));
        } else {
            classes.replace('vert', 'rouge');
            console.log("Vert : ", classes.contains('vert'));
            console.log("Rouge : ", classes.contains('rouge'));
        }
    }
}
function rougeEtBleu() {
    let paragraphes = document.querySelectorAll('p.rouge, p.bleu');
    for (const p of paragraphes) {
            p.classList.toggle('rouge');
            p.classList.toggle('bleu');
            // console.log("Rouge : ", classes.contains('rouge'));
            // console.log("Bleu : ", classes.contains('bleu'));
    }
}
function mettreEnItalique() {
    let p = document.querySelector('p');
    // p.style.fontStyle = "italic";
    // if (p.style.fontStyle == "italic") {
    //     p.style.fontStyle = 'normal';
    // } else {
    //     p.style.fontStyle = 'italic';
    // }
    p.style.fontStyle = (p.style.fontStyle == "italic" ? "normal" : "italic");
}