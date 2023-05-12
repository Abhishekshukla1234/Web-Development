const calculate =(a, b, operation) =>{
    return operation(a,b);
};

// method 1
const addition =calculate(3, 4, function(num1,num2){
return num1+num2
})

console.log(addition);

// method 2
const subtraction =(a,b)=> a-b;
const subResult=calculate(8,3,subtraction)

console.log(subResult)

// method 1 apply for finding the multiplication
const multiplication = calculate(7,5, function(num1,num2){
return num1*num2
})

console.log(multiplication);


// method 2 apply for finding the division
const division=(c,d)=>c/d
const divResult=calculate(4,2, division)
console.log(divResult)