// let que0 = "I have foot."
let que1 = "I have wings.";
let que2 = "I am a mamal.";
let que3 = "I am a bug.";
let ans1 = "I am a peagion!";
let ans2 = "I am a beatle!"

//Function takes 2 argument
let takeQue = (one, other) => one + other;

//You have much time so you and your friend wanted to play quiz together. 
//You need to get correct answer which creature your friend thought of.
//So you asked if it's walking or flying. 
//... and he answered it's flying.
let youTakeWing = takeQue.bind(que1, this);
console.log(que1)

//Now you asked if it's mamal or bug.
//... he answered... 
//...(choose between youTakeMamal and youTakeBug)

//But you don't wanted to play quiz and asked him what is the answer.
//So he answered.... 
//(Type: node quiz.js)
    let youTakeMamal = youTakeWing(que2);
    console.log(que2);
   
    let youTakeBug = youTakeWing(que3);
    console.log(que3);
    

    console.log(ans1) 
    console.log(ans2);