const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

const counts = {};

function repeatCounter(param){
    // recorremos el arreglo contando cada uno de los elementos
    counterWords.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts)
}

repeatCounter(counterWords);

