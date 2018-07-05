
let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

let xRef = { value: 10 };
let yRef = xRef;

console.log(xRef);
console.log(yRef);


function increase(number){
    number++;
}

let number = 10;
increase(number);
console.log(number);    // 10


let obj = { value: 10 }

function increaseValue(obj){
    obj.value++;
}

increaseValue(obj);
console.log(obj);    //11 