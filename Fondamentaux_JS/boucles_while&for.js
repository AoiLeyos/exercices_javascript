/*Dernière valeur de boucle
Quelle est la dernière valeur affichée par ce code ? Pourquoi ? */
`let i = 3;

while (i) {
  alert( i-- );
}`
/*La dernière valeur affiché par ce code est 1 car l'alerte est en décrémentation postfixes i diminue de 1,
 mais renvoie sur son ancienne valeur et la vérification de while(i) s'arrete lorsque i = 0*/

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Quelles valeurs affiche la boucle while ?
A votre avis, quelles sont les valeurs affichées pour chaque boucle ? Notez-les puis comparer avec la réponse.

Les deux boucles affichent-elles les mêmes valeurs dans l’alert ou pas ?*/
1. 
// Le préfixe sous forme ++i :

let i = 0;
while (++i < 5) alert( i );
//puisque nous somme en incrémentation préfix i s'arrête lorsqu'il arrive a 4 donc l'alerte affiche 4

// 2.
// Le postfixe sous forme i++ :

let i= 0;
while (i++ < 5) alert( i );
//puisque nous somme en incrémentation postfix i s'arrête lorsqu'il arrive a 5 mais il renvoie sont ancienne valeur

/*Les 2 boucles n'affichent pas la même valeurs dans l'alerte,
en incrémentation postfix elle affiche 5 alors que en incrémentation préfix elle affiche 4 */

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Quelles valeurs sont affichées par la boucle "for" ?
Pour chaque boucle, notez les valeurs qui vont s’afficher. Ensuite, comparez avec la réponse.

Les deux boucles alert ont les mêmes valeurs ou pas ? */

// La forme postfix :

for (let i = 0; i < 5; i++) alert( i );

// La forme préfix :

for (let i = 0; i < 5; ++i) alert( i );

//les deux boucles alertes ont les même valeurs puisque l'on revérifie la valeur de i a chaque boucle, les valeurs affiché vont de 0 a 4


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Extraire les nombres pairs dans la boucle
Utilisez la boucle for pour afficher les nombres pairs de 2 à 10. */

for (let i=2;i<=10;i++) {
    if (1 % 2 == 0)
    alert(i)
}

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Remplacer "for" par "while"
Réécrivez le code en modifiant la boucle for en while sans modifier son comportement (la sortie doit rester la même). */
`for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }`

let i=0
while (1<3) {
    alert(`number ${1}!`);
    i++;
}

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Répéter jusqu'à ce que l'entrée soit correcte
Ecrivez une boucle qui demande un nombre supérieur à 100. Si le visiteur saisit un autre numéro, demandez-lui de le saisir à nouveau.

La boucle doit demander un numéro jusqu’à ce que le visiteur saisisse un nombre supérieur à 100 ou annule l’entrée/entre une ligne vide.

Ici, nous pouvons supposer que le visiteur ne saisit que des chiffres. Il n’est pas nécessaire de mettre en œuvre un traitement spécial pour une entrée non numérique dans cette tâche.*/

let numb

do {
  numb = prompt("Nombre plus grand que 100",0)
}
while (numb > 100)