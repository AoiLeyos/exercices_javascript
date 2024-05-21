/*Créez un objet calculator avec trois méthodes :

    read() demande deux valeurs et les enregistre en tant que propriétés d’objet avec les noms a et b respectivement.
    sum() renvoie la somme des valeurs sauvegardées.
    mul() multiplie les valeurs sauvegardées et renvoie le résultat.*/

    "use strict"
    let calculator = {
      read(){
      this.a = +prompt("a?",0);
      this.b = +prompt("b?",0);
    },
      sum(){
      return this.a + this.b;
    },
      mul(){
      return this.a * this.b;
      }
    };
    
    calculator.read();
    alert(calculator.mul());
    alert(calculator.sum());