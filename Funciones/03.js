const number = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param){
    // Creamos una variable para almacenar la suma y la iniciamos en 0
    let suma = 0;
    // Bucle para recorrer el array de number como los que hemos estado haciendo
    for(let i = 0; i < number.length; i++){
        // A mi variable suma le sumo el elemento del array
        suma = suma + number[i]
        // suma += number[i] -> Otra manera de expresar la sentencia de arriba
    }
    // Devuelvo el parámetro
    return suma;
}
// LLamamos a la funcion pasandole como parametro nuestro array
console.log(sumAll(number));