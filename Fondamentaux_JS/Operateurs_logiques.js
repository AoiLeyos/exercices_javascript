/*Quel est le résultat de OR ?
qu'est-ce que le code ci-dessous va sortir ? */
`alert( null || 2 || undefined );`
//Ce code va sortir la 1 ere valeur vrais qui est 2 

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Quel est le résultat des alertes OR ?
qu'est-ce que le code ci-dessous va sortir ? */
`alert( alert(1) || 2 || alert(3) );`
/* Ce code va sortir la premiere alerte (1) puis la 1 ere valeur vrais qui est 2,
car alerte(1) est undefined donc le OR pousuit jusqu'a sa première valeur vrais.*/

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Quel est le résultat de AND ?
qu'est-ce que le code va afficher ? */
`alert( 1 && null && 2 );`
// Ce code va afficher la premiere valeur fausse qui est "null".

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Quel est le résultat des alertes AND ?
Qu’est-ce que ce code va afficher ?*/
`alert( alert(1) && alert(2) );`
//Ce code va afficher la première valeur fausse qui est alerte (1) car alerte (1) est undefined.

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Le résultat de OR AND OR
Quel sera le résultat ?*/
`alert( null || 2 && 3 || 4 );`
/*
pour le résultat on commence d'abord avec les AND car il est plus élevé dans le tableau d'ordre de précédence
puis après par les OR,On prend 3 car c'est la derniere valeur vrais puisqu'il n'y a pas de valeur fausse
,puis on choisit la première valeur vrais qui est 3
*/

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Vérifiez la plage entre
Ecrivez une condition "if" pour vérifier que l’age est compris entre 14 et 90 ans inclus.

“Inclus” signifie que l’age peut atteindre les 14 ou 90 ans. */

if (age >= 14 && age <=90) {
    console.log("l'age est compris entre 14 et 90 ans inclus");
};

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Vérifiez à l'extérieur de la plage
Ecrivez une condition if pour vérifier que l’age n’est PAS compris entre 14 et 90 ans inclus.

Créez deux variantes: la première utilisant NOT !, La seconde – sans ce dernier. */
let age = Math.round(Math.random()*100)
if (!(age => 14 && age <= 90)) {
    console.log ("l'age n'est pas compris entre 14 et 90 ans inclus")
}
else {
    console.log("l'age est compris entre 14 et 90 ans inclus");
};

if (age < 14 && age > 90) {
    console.log ("l'age n'est pas compris entre 14 et 90 ans");
}
else {
    console.log ("l'age est compris entre 14 et 90 inclus")
};

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Une question à propos de "if"
Lesquelles de ces alertes vont s’exécuter ?

Quels seront les résultats des expressions à l’intérieur de if (...) ? */
`if (-1 || 0) alert( 'first' );` //la première valeur vrais est -1 donc la commande s'éxecute (true)
`if (-1 && 0) alert( 'second' );` //la première valeur fausse est 0 donc  la commande ne s'execute pas (false)
`if (null || -1 && 1) alert( 'third' );` /*la précédence && est plus élevé ont commence par celle la,
 il n'y a pas de valeur fausse donc on prend la première valeur vrais qui est 1 puis on prend la première valeur vrais qui est 1 */

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Check the login
Écrivez le code qui demande une connexion avec prompt.

Si le visiteur entre "Admin", puis prompt pour un mot de passe, si l’entrée est une ligne vide ou Esc – affichez “Canceled”, s’il s’agit d’une autre chaîne de caractères – alors affichez “I don’t know you”.

Le mot de passe est vérifié comme suit :

    S’il est égal à “TheMaster”, alors affichez “Welcome!”,
    Une autre chaînede caractères – affichez “Wrong password”,
    Pour une chaîne de caractères vide ou une entrée annulée, affichez “Canceled”.*/
/*Veuillez utiliser des blocs if imbriqués. Attention à la lisibilité globale du code.

Astuce: passer une entrée vide à un prompt renvoie une chaîne de caractères vide ''. En pressant ESC lors d’un prompt cela retourne null.*/

let User = prompt("who's there",);
let Password = prompt("Password?",);

if (User=="Admin")  {
    if (Password=="TheMaster") {
        alert("Welcome!");
    }
    else if (Password=="" || null) {
        alert("canceled");
    }
    else {
        alert("Wrong password");
    }
}
else if (User=="" || null) {
    alert("canceled");
}
else {
    alert("i don't know you");
}

