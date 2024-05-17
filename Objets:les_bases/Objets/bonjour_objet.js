/*Bonjour objet

importance: 5

Écrivez le code, une ligne pour chaque action :

    Créer un objet vide user.
    Ajoutez la propriété name avec la valeur John.
    Ajoutez la propriété surname avec la valeur Smith.
    Changer la valeur de name pour Pete.
    Supprimez la propriété name de l’objet.*/

let user = {
    name:"John",
    surname:"Smith",
}
user.name = "Pete";
delete user.name;
for (let key in user) {
    alert(user[key]);
}

