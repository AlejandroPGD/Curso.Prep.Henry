// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const getKeys = Object.keys(objeto);
  const keyToValue = key => [key, objeto[key]];
  const objectToMatrix = getKeys.map(keyToValue);
  return objectToMatrix;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 const sortedString = [...string].sort();


 const charactersIndexOf = (character, index, characters) => characters.indexOf(character);
 const unique = (recurrent, index, recurring) => index === recurring.indexOf(recurrent);
 const subtractNext = (value, index, subtractNext) =>  value - subtractNext[index + 1];
 
 const quantities = sortedString.map(charactersIndexOf);//
 const validValues = values => values;
 const quantitiesWitnLength = [...quantities, sortedString.length].filter(unique).reverse().map(subtractNext).filter(validValues).reverse();
 let object = {};
 const characters = sortedString.filter(unique);
 const creaObjeto = (key, position) => object[key] = quantitiesWitnLength[position];
 const objeto = characters.forEach(creaObjeto);

 
 return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  string = [...s];
  const capital = letter => letter === letter.toUpperCase();
  const lower = letter => !capital(letter);
  capitalLetters = string.filter(capital).join('');
  lowerLetters = string.filter(lower).join('');
  


  return capitalLetters + lowerLetters;


}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const arrayString = [...str.split(' ')];
      console.log(arrayString);
      const wordToStringMirror = function(word,index, string){
          if(index < string.length - 1){
              return [...word].reverse().join('') + ' ';
          }
          return [...word].reverse().join('');
      }
      const mirror = arrayString.map(wordToStringMirror);

      return mirror.join('');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const number = Array.from(String(numero));

  const firstHalf = (digit, index, digits) => index < Math.floor(digits.length / 2);

  const splitStart = number.filter(firstHalf);
  const splitEndReverse = number.reverse().filter(firstHalf);
  const compare = (value, index) => value === splitEndReverse[index] ? true : false;
  const trueOrFalse = (acumulador, value) => acumulador && value;
  const isCapicua = splitStart.map(compare).reduce(trueOrFalse) ? "Es capicua":"No es capicua";
  return isCapicua;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  string = [...cadena.split('')];
  const eliminar = valor => valor !== 'a' && valor !== 'b' && valor !== 'c';
  const eliminaABC = string.filter(eliminar).join('');
  return eliminaABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  array = [...arr];
  const indexSizeArray = (word,index) => [word.length, index];
  let sorted = [];
  const sizeArray = array.map(indexSizeArray).sort();
  const indexOfArray = value => sorted.push(array[value[1]]);
  const sortedArray = sizeArray.forEach(indexOfArray);
  

  return sorted;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const arrayA = [...arreglo1];
  const arrayB = [...arreglo2];
  const arrayAB = arrayA.concat(arrayB);
  const union = (value, index, array) => index !== array.indexOf(value);
  const equalls = arrayAB.filter(union);
 

  return equalls;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

