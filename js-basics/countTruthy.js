
// Falsy
// undefined
// null
// ''
// false
// 0 
// NaN

function countTruthy(array){
    let iterator = 0;

    for (let item of array){
        if (item){
            iterator++;
        }
    }
    
    return iterator;
}

const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));