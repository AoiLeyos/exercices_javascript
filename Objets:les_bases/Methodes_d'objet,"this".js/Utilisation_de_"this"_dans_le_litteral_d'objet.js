/*Ici, la fonction makeUser renvoie un objet.

Quel est le résultat de l’accès à sa ref ? Pourquoi ?*/ //le résultat de l'accès a sa ref est une erreur car this est appelée en tant que fonction et non methode.
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Quel est le résultat ? Il y a une erreur car this est appelée en tant que fonction.