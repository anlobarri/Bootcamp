const number = [12, 21, 38, 5, 45, 37, 6];

function average(param){
    let sum = 0;
    let promedio = 0;

    for(let i = 0; i < number.length;i++){
        sum += number[i]
    }

    promedio = sum / number.length;
    return promedio;
}

console.log(average(number));