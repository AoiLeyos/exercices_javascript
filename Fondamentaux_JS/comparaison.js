/*Comparaison 
quel sera le résultat pour les expressions suivantes : */

`5 > 4` // true 
`"apple" > "pineapple"` // False, car dans la la table ascii le "p"(112) a une valeur décimal plus importante que celle de "a"(97) (97<112)
`"2" > "12"`// True, tant que l'on compare un string avec un autre string l'on se référe a la table ascii ("1" a une valeur décimal de 49 alors que 2 a une valeur décimal de 50), elles sont comparé caractére par caractére
`undefined == null` // True, car undefined n'est égale qu'a null et null n'est égale qu'a undefined
`undefined === null`// False , ils ne sont pas de même type, === compare les types
`null == "\n0\n"`// False, null n'est égale qu'a undefined
`null === +"\n0\n"`// False, ils ne sont pas du même type