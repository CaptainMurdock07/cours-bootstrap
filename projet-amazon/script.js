// list of all available products
var produits = [
    { description : 'Velo', prixUnitaire: 300, src: "images/a.png",quantite : 50 },
    { description : 'Appareil photo', prixUnitaire: 1800, src: "images/b.jpg",quantite : 30 },
    { description : 'Nintendo Switch', prixUnitaire: 500, src: "images/c.jpg",quantite : 500 },
    { description : 'PS5', prixUnitaire: 1200, src: "images/d.jpg",quantite : 1000 },
    { description : 'Ballon', prixUnitaire: 200, src: "images/e.jpg",quantite : 10000 },
    { description : 'IPhone13', prixUnitaire: 1500, src: "images/f.jpg",quantite : 10 },
]
// load all products
function loadProducts() {
    displayProducts(produits);
}

// row.addEventListener('load', function () {
//     console.log('row')
//     for (const elt of produits) {
//         row.innerHTML += `<div class='col-6'> <img src='${elt.src}'><br> ${elt.prixUnitaire}</div>`;
//     }

// });

// search a specific product
function searchProducts() {
    let input = document.getElementById('search');
    let resultat = [];
    for (const elt of produits) {
        if (elt.description.toLowerCase().includes(input.value.toLowerCase())) {
            resultat.push(elt);
        }
    }
    displayProducts(resultat);
}
// dipslay the array given as parameter
function displayProducts(tableau) {
    let row = document.querySelector('.row');
    row.innerHTML = "";
    if (tableau.length > 0) {
        for (const elt of tableau) {
            row.innerHTML += `<img class="col-4 my-4" src='${elt.src}'>
            <ul class='offset-2 col-6 list-group my-5'>
            <li  class="list-group-item list-group-item-secondary">${elt.description}</li>
            <li  class="list-group-item list-group-item-secondary">Quantité disponible : ${elt.quantite}</li>
            <li  class="list-group-item list-group-item-secondary">Prix TTC : ${elt.prixUnitaire}€</li>
            <li class="list-group-item list-group-item-secondary"><i class="fas fa-shopping-cart"></i></li>
            </ul>`;
        }
    } else {
        row.innerHTML += `<div class="text-center alert alert-danger">
        Le produit recherché n'est pas disponible pour le moment.
      </div>`;
    }
}
