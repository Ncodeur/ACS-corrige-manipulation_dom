/**
 * Functions
 * @description Cette fonction nous permets de nous retourner la valeur d'une propriété
 * CSS d'un élement
 */
function getStyleValue(element, property) {
    return parseFloat(window.getComputedStyle(element, null).getPropertyValue(property));
}
 

/**
 * Exercice 1
 * @desc Créer un texte qui s’agrandit au au click, puis si on reclick dessus 
 * il reprend sa taille d’origine.
 */

// Ici on stock trois variables : 
// * Le bouton qui déclenchera l'action
// * L'élement texte à changer
// * La taille par défaut (au chargement) du text (parseFloat permet d'enlever le "px" retourné par la fonction getStyleValue)
var btnBigger = document.getElementById("setBiggerText");
var biggerText = document.getElementById("biggerText");
var defaultTextSize = (getStyleValue(biggerText, 'font-size'));

// Au click du bouton
btnBigger.addEventListener("click", function() {
    // Si la taille par défaut est différente de la taille actuelle du texte
    if(getStyleValue(biggerText, 'font-size') != defaultTextSize) {
        // alors on remet la taille par défaut
        biggerText.style.fontSize = defaultTextSize + "px";
        // on change le contenu du bouton
        btnBigger.textContent = "Agrandir le texte";
    } else {
        // sinon, on ajoute 10px à la taille par défaut
        biggerText.style.fontSize = (defaultTextSize + 10) + "px";
        // on change le contenu du bouton
        btnBigger.textContent = "Réduire le texte";
    }
});






/**
 * Exercice 2
 * @description Créer 5 boutons et un rectangle bleu de 100px par 100px au centre de 
 * la page. Chaque bouton provoque une action sur le rectangle.
 * Bouton 1 : augmente la hauteur de 10px, si il dépasse 300px, il remet la hauteur à 100px
 * Bouton 2 : met le rectangle en vert
 * Bouton 3 : remet les couleurs initiales
 * Bouton 4 : fait disparaître le rectangle
 * Bouton 5 : fait réapparaître le rectangle 
 */

var rectangle = document.getElementById('rectangle');
var btnBiggerRect = document.getElementById('setBiggerRect');
var btnGreenRect = document.getElementById('setGreenRect');
var btnResetColorsRect = document.getElementById('resetColorsRect');
var btnHideRect = document.getElementById('hideRect');
var btnShowRect = document.getElementById('showRect');

// au clic du bouton pour agrandir le rectangle
btnBiggerRect.addEventListener("click", function() {
    // on récupère sa hauteur, que l'on stocke dans uen variable
    var rectangleHeight = getStyleValue(rectangle, 'height');

    // si cette hauteur est inférieur à 300
    if (rectangleHeight < 300) {
        // on l'incrémente de 10px
        rectangle.style.height = (rectangleHeight + 10) + "px";
    } else {
        // sinon, il faut la remette à 100px
        rectangle.style.height = "100px";
    }

    // petit trip, afficher la hauteur du rectangle dans ce dernier
    rectangle.innerHTML = "<span>" + getStyleValue(rectangle, 'height') + "px </span>";
});

// au clic sur le bouton pour mettre en vert le rectangle
btnGreenRect.addEventListener("click", function() {
    // alors on défini le background color de rectangle
    rectangle.style.backgroundColor = "#28a745";
}); 

// au clic sur le bouton pour remettre à zero les couleurs du rectangle
btnResetColorsRect.addEventListener("click", function() {
    // alors on défini le background color de rectangle
    rectangle.style.backgroundColor = "#007bff";
}); 

// au clic sur le bouton pour cacher le rectangle
btnHideRect.addEventListener("click", function() {
    // alors on défini la propriété CSS visibility à hidden
    rectangle.style.visibility = "hidden";
}); 

// au clic sur le bouton pour afficher le rectangle
btnShowRect.addEventListener("click", function() {
    // alors on défini la propriété CSS visibility à visible
    rectangle.style.visibility = "visible"; 
}); 




/**
 * Exercice 3
 * @description Reprendre le rectangle bleu, et lorsqu’on appui sur la flèche du
 * haut le faire monter de 100px puis reprendre sa place initiale. 
 * ATTENTION il doit monter et descendre en un appui uniquement
 */

// à l'appui d'une touche du clavier
document.addEventListener("keydown", function(event) {
    // event.keyCode nous permet de nous retourner l'identifiant de la touche
    // enfoncée. 38 = flèche du haut
    if(event.keyCode == 38) {
        rectangle.style.top = "-100px";
    }
});


// au relachement d'une touche du clavier
document.addEventListener("keyup", function(event) {
    // event.keyCode nous permet de nous retourner l'identifiant de la touche
    // enfoncée. 38 = flèche du haut
    if(event.keyCode == 38) {
        rectangle.style.top = "0px";
    }
});