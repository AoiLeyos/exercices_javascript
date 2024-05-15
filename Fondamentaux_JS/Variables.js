// Exercice 1

/*Travailler avec des variables.
Déclarez deux variables : admin and name.
Assignez la valeur "John" à name.
Copiez la valeur de name à admin.
Afficher la valeur de admin en utilisant alert (devrait afficher “John”). */

let admin;

let name;

name = "john";
admin = name;

console.log(admin);


//-----------------------------------------------------------------------------------------------------

// Exercice 2 


/*Assigner le bon nom
Créez la variable avec le nom de notre planète. Comment nommeriez-vous une telle variable ?
Créez la variable pour stocker le nom du visiteur actuel. Comment nommeriez-vous cette variable ?*/


let ourPlanet = "Terre";

let currentVisitor = "Romain";



//------------------------------------------------------------------------------------------------------

//Exercice 3

/*Constante en majuscule
Examinez le code suivant :*/

`const birthday = '18.04.1982';

const age = someCode(birthday);`

/*Ici, nous avons une constante birthday pour la date de naissance, ainsi que la constante age.

L’age est calculé à partir de birthday en utilisant someCode(), ce qui signifie un appel de fonction que nous n’avons pas encore expliqué (nous le ferons bientôt !), mais les détails n’ont pas d’importance ici, le fait est que l’age est calculé d’une manière ou d’une autre en fonction de la date de naissance birthday.

Serait-il juste d’utiliser des majuscules pour birthday? Pour age? Ou même pour les deux ?*/

`const BIRTHDAY = '18.04.1982'; // mettre l'anniversaire en majuscule ?` // Oui car c'est une constante qui ne change pas.

`const age = someCode(BIRTHDAY); // mettre l'âge en majuscule ?` // il faut le mettre en minuscule car bien que cela soit une constante elle varie quand même.



