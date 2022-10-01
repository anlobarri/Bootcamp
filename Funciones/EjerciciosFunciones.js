const avengers = ["Hulk", "Thor", "IronMan", "Capitan A.", "Spiderman", "Capitan M."]

//Creamos una función y le digo que le tengo que pasar un parámetro
function findLongestWord (param){
    // Creo una variable longitud para almacenar el número de letras de cada palabra. De momento lo iniciamos en 0
    let longitud = 0;
    // Creo una variable superheroe para almacenar el nombre del superheroe. De momento en blanco
    let superheroe = "";

    // Bucle para poder recorrer todo el array
    for(let i = 0; i < avengers.length; i++){
        // Si el número de palabras es mayor que mi variable longitud (De momento 0)    
        if(avengers[i].length > longitud){
            // Coloca a longitud el número
            longitud = avengers[i].length;
            // Coloca dentro de superhero el nombre (Esto es lo que te faltaba antes)
            superheroe = avengers[i]
        }
    }
    // Devuelve el valor de superhero, que es donde tengo almacenado el nombre no el número de letras que lo contiene
    return(superheroe)
}

// Hacemos un console.log llamando a la función y pasandole como parámetro el array
console.log(findLongestWord(avengers));








