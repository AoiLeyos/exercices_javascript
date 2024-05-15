/*Les formes postfixes et préfixes
quelles sont les valeurs finales de toutes les variables a,b,c et d après le code ci-dessous ? */
`let a = 1, b = 1;` // on a créé la variable a et on lui a assignée la valeur 1 et l'on a créé la variable b et l'on lui a assignée la valeur 1.
`let c = ++a;` // on a créé la variable c et on lui a assignée une incrémentation préfix de la variable a, la valeur affiché est donc 2 pour la variable c et 2 pour la variable a
`let d = b++;` // on a créé la variable d et on lui a assignée une incrémentation postfix de la variable b, la valeur affiché est donc 1 pour la variable d et 2 pour la variable b 


// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------


/*Résultat d'affectation
Quelles sont les valeurs de a et x après le code ci-dessous ?*/

`let a = 2;` // la valeur de la variable a est 2 
`let x = 1 + (a *= 2);` // la valeur de la variable x est 5 : 1+(2*2)=5 

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------


/*Les conversions de type
quels sont les résultats de ces expressions  ? */

`"" + 1 + 0` // le résultat de cette expression est "10" car un "+"" a coté d'un string fait une concaténation (la concaténation se transmet) (""+1+0="1"+0="10")
`"" - 1 + 0` // le résultat de cette expression est -1 car le "-" convertie en number ("" - 1 + 0 = 0 - 1 + 0 = -1)
`true + false` // le résultat de cette expression est 1 car le "+" convertie en number et donc true en number == 1 et false == 0 (1 + 0 = 1)
`6 / "3"` // le résultat de cette expression est 2 car "/" convertie en number (6 / 3 = 2)
`"2" * "3"` // le résultat de cette expression est 6 car "*" convertie en number ("2" * "3" = 2 * 3 = 6)
`4 + 5 + "px"`// le résultat de cette expression est de "9px" car 4 + 5 c'est du number il s'additionne donc ça donne 9, le "+" entre "px" et 9 est une concaténation donc le résultat est "9px"
`"$" + 4 + 5` // le résultat de cette expression est de "$45" car le string est au début donc on concaténe dès le début.
`"4" - 2` // le résultat de cette expression est 2 car le "-" convertie en number ("4" - 2 = 4 - 2 = 2)
`"4px" - 2` // le résultat de cette expression est NaN car "-" convertie en number et "4px" n'est pas un nombre donc le résultat est Not a Number (NaN)
`"  -9  " + 5` // cette expression est une concaténation car il y a un "+" a coté d'un string donc le résultat est " -9 5"
`"  -9  " - 5` // le résultat de cette expression est -14 car le "-" convertie en number donc on fait abstraction des espace dans le string et le string est convertie en number. (" -9 " - 5 = -9 - 5 = -14)
`null + 1` // le résultat de cette expression est 1 car le "+" convertie en number, et null en number équivaut a 0. (null + 1 = 0 + 1 = 1)  
`undefined + 1` // le résultat de cette expression est NaN car le "+" convertie en number et undifined équivaut a NaN (undifined + 1 = NaN + 1 = NaN)
`" \t \n" - 2` // le résultat de cette expression est -2 car le "-" convertie en number et " \t \n" les \ sont des actions donc en calcul cela vaut 0 (" \t \n" -2 = 0 - 2 = -2)

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

/*Corrigez l'addition
Voici un code qui demande à l’utilisateur deux nombres et affiche leur somme.

Cela ne fonctionne pas correctement. La sortie dans l’exemple ci-dessous est 12 (pour les valeurs d’invite par défaut).

Pourquoi ? Réparez-le. Le résultat doit être 3. */

`let a = prompt("First number?", 1);` 
`let b = prompt("Second number?", 2);`
`alert(a + b); // 12`

//La raison pour la quelle nous avons le résultat 12, c'est parce que il y a concaténation entre la variable a et b
//Pour réparé et avoir le bon résultat il faut mettre son code comme ceux-la car il faut convertir en number: 

`let a = +prompt("First number?", 1);` 
`let b = +prompt("Second number?", 2);`
`alert(a + b); // 12`