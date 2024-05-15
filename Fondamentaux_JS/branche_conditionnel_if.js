/*If (une chaine de caractères avec zéro)
est-ce que alert sera affiché ? */

`if ("0") {
    alert( 'Hello' );
  }`
// Si if ("0"), l'alert seras affiché car le string contient un caractère même si ce caractère est "0"

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------


/*Le nom de JavaScript
En utilisant la construction if..else, écrivez le code qui demande : ‘Quel est le nom “officiel” de JavaScript?’

Si le visiteur entre “ECMAScript”, alors éditez une sortie “Bonne réponse !”, Sinon – retourne “Ne sait pas ? ECMAScript!” */

    "use strict"
    let name = prompt("OfficialNameOfJavaScript",)

    if (name=="ECMAScript") {
        alert("Bonne réponse !")
    }
    else {
        alert ("Ne sait pas ? ECMAScript!")
    }

/*On créé la variable name et on y assigne un prompt "OfficialNameOfJavaScript"
Si la variable name est égale à "ECMAScript" alors l'alert "Bonne réponse" sort, sinon l'alerte "Ne sait pas ? ECMAScript!" sort*/ 


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Afficher le signe
En utilisant if..else, écrivez le code qui obtient un numéro via le prompt, puis l’affiche en alert :

    1, si la valeur est supérieure à zéro,
    -1, si inférieur à zéro,
    0, si est égal à zéro.

Dans cet exercice, nous supposons que l’entrée est toujours un nombre. */

"use strict"

let number=+prompt("type a number","0")

if (number>0) {
  alert(1)
}
else if (number<0) {
  alert(-1)
}

else {
  alert(0)
}
 
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Réécrire 'if' en '?'
Réécrivez ce if en utilisant l’opérateur conditionnel '?' : */
`let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}`

let result = (a + b < 4) ? 'below' : 'over';

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Réécrire 'if...else' en '?'
Réécrire ce if..else en utilisant plusieurs opérateurs ternaires '?'.

Pour plus de lisibilité, il est recommandé de diviser le code en plusieurs lignes. */

`let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}`

let message = (login == 'Employee') ? 'Hello' : 
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';