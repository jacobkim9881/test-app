const Arry = [];

let fruit = "apple";

let randomNumber

let zeroToTen

let reducer = (a, b) => a + b;


for(let i = 0; i <= fruit.length; i++) {
    randomNumber = Math.random() * 10;

    zeroToTen = Math.trunc(randomNumber);    

    Arry.push(zeroToTen);
}

console.log(Arry);

let reduceArry = Arry.reduce(reducer);

console.log(reduceArry);