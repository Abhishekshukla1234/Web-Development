const age =5;
if(age>=18)
{  console.log('you can eligibale for vote'); 
 console.log('you can vote ')
}
if(age>=30){
    console.log('you can gave two vote ')
}
else {
     console.log('you can not vote')
}
if(age<=5){
    console.log('you can not vote and you go to school')
}

const number =65;

if(number>=90){
    console.log('yo are pass in A+ grade ');
}

else if (number>=80){
    console.log('you are pass in A grade');
}
else if (number>=70){
    console.log('you are pass in B+ grade');
}
else if (number>=60){
    console.log('you are pass in B grade');
}

//ternary statement
const mark=40;
const result=mark >= 40 ? "PASSED" : "FAILED";
console.log("result",result)
