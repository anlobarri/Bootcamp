const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

// Creamos una función, en el parametro 1 pondremos el array y en el parametro 2 el nombre a buscar
function finderName(param1, param2){
    // Variable que llamamos al array y buscamos si existe el nombre
    let buscarNombre = nameFinder.includes(param2)
    // Variable para almacenar el indice del nombre
    let indice = nameFinder.indexOf(param2);
    
    // Si existe el nombre. Nos devuelve true, entonces
    if(buscarNombre){
        // Imprimimos por pantalla el nombre y el indice del mismo
        console.log("Nombre: " + param2 + " Indice: " + indice);
    }else{
        // Si no existe el nombre mostramos false
        console.log(false)
    }
}

// llamamos a la función colocando el array y el nombre que queremos buscar
finderName(nameFinder, 'Natasha');

// Si no existe el nombre a buscar nos devuelve false
finderName(nameFinder, 'Angel');

