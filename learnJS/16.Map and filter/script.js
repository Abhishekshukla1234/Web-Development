let students = [
{ id:"001", name: "Ashish", sports:" cricket"},
{ id:"002", name: "Ambikesh", sports:" football"},
{ id:"003", name: "Alok", sports:"kabbadi"},
{ id:"004", name: "Abhishek", sports: "basketball"},
{ id:"005", name: "Bhanu", sports:"hockey"}
]

 //filter is use for the print some array

// const newArray = students.filter((curValue) => {
//     if(curValue.id % 2 ==0) return true;
//     else return false;

// })

// console.log("New Array Here...")
// console.log(newArray);


// map is use for the print any element of the array

const names = students
.filter((curValue) => curValue.sports === "cricket")
.map((curValue , index , array) =>{
      // return curValue.name;
      return`<li>${curValue.name}<li>`;
});

console.log(name);
 
const div = document.getElementById('container')

div.innerHTML =`<ul>${names.join('')}<ul>`