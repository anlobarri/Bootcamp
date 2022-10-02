const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

// Creamos una variable para almacenar la suma de numeros
let sumNumber = 0;
// Variable para almacenar el numero de letras de los strings
let sumString = 0;

function averageWord(param) {
    // Bucle for normal
  for (let i = 0; i < mixedElements.length; i++) {
    // Hacemos una condicion para comprobar si el tipo de dato es de tipo number
    if (typeof mixedElements[i] === "number") {
        // Si es de tipo number lo metemos en nuestra variable sumNumber y lo sumamos
      sumNumber += mixedElements[i];
      // Si no en este caso sería de tipo String
    } else {
        // Lo metemos dentro de nuestra variable para sumar string
      sumString += mixedElements[i].length;
    }
  }

  console.log("La suma de number es: " + sumNumber);
  console.log("La suma de Strings es: " + sumString)
}

averageWord(mixedElements)
