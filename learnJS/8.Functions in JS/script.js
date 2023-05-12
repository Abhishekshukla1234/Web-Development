const a=12;
const b=14;
const result=sumOfTwoNumbers(a,b);
console.log('returned result',result)
//
// do something else
//
const c=14;
const d=14;
sumOfTwoNumbers(c,d);
//
// do something else
//
const e=12;
const f=18;
sumOfTwoNumbers(e,f);

function sumOfTwoNumbers(a,b){
    const sum=a+b;
    console.log("result",sum);
    return sum;
}

// function expression

const square=function(num){
    return num*num;
};
console.log(square);
console.log(square(9))
//Nested function
