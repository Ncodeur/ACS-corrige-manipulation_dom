/**
 * Functions
 * @desc Cette fonction nous permets de nous retourner la valeur d'une propriété
 * CSS d'un élement
 */
function getStyleValue(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
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
var defaultTextSize = parseFloat(getStyleValue(biggerText, 'font-size'));

// Au click du bouton
btnBigger.addEventListener("click", function() {
    // Si la taille par défaut est différente de la taille actuelle du texte
    if(parseFloat(getStyleValue(biggerText, 'font-size')) != defaultTextSize) {
        // alors on remet la taille par défaut
        biggerText.style.fontSize = defaultTextSize + "px";
    } else {
        // sinon, on ajoute 10px à la taille par défaut
        biggerText.style.fontSize = (defaultTextSize + 10) + "px";
    }
});
