/*Vérifier le vide
importance: 5

Ecrivez la fonction isEmpty(obj) qui renvoie true si l’objet n’a pas de propriétés, sinon false.

Devrait fonctionner comme ça : */

`let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false`

function isEmpty(obj){
    for (let key in obj) {
        return false;
    }
    return true;
}