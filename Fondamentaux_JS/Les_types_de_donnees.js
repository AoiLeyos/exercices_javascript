/* String quotes
quelle est la sortie du script 
`let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?` */

let name = "Ilya";

alert( `hello ${1}` ); // la sortie de cette alert est "hello 1"

alert(`hello ${"name"}`); // la sortie de cette alert est "hello name"

alert (`hello ${name}`); // la sortie de cette alert est "hello Ilya"