// function changerImage() {
//     var image = document.querySelector('img');
//     image.setAttribute('src', 'images/b.png');
// }
function changerImage() {
    var image = document.querySelector('img');
    console.log(image.getAttribute('src'));
    console.log(image.src);
    if (image.getAttribute('src') == "images/a.png") {
        image.setAttribute('src', 'images/b.png');
    } else if (image.getAttribute('src') == "images/b.png") {
        image.setAttribute('src', 'images/c.png');
    } else {
        image.setAttribute('src', 'images/a.png');
    }
}
var interval;
function start() {
    // callback : fonction de rappel, fonction de retour
   interval = setInterval(changerImage, 3 * 1000);
}
function stop() {
    clearInterval(interval);
}
