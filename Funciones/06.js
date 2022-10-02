const duplicates = [
    'sushi',
    'pizza',
    'burguer',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
const noDuplicate = [];

function removeDuplicates(param){
    for(let i = 0; i < duplicates.length; i++){
        const element =  duplicates[i];
        // recorrer el array y agregar cada elemento a un nuevo array siempre y cuando no exista ya en el mismo, para lo cual nos valdremos del método includes
        if(!noDuplicate.includes(duplicates[i])){
         noDuplicate.push(element);
        }
     }
     return noDuplicate;
}

console.log(removeDuplicates(duplicates))





