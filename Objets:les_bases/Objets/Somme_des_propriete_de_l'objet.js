/*Somme des propriétés de l'objet
importance: 5

Nous avons un objet stockant les salaires de notre équipe :*/
`let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }`
/*Écrivez le code pour additionner tous les salaires et les enregistrer dans la variable sum. Devrait être égale à 390 dans l’exemple ci-dessus.

Si salaries est vide, le résultat doit être 0.*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum)
