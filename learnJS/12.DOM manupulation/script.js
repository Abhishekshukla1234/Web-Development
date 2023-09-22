const box1 = document.getElementById("box-1");
box1.innerHTML = "Hello world"


box1.style.backgroundColor = "red"


box1.classList.add('round-border');
const boxes = document.getElementsByClassName("box");
 for(let i=0; i<boxes.length; i++)
 {
    boxes[i].classList.add("round-border")
 }

box1.classList.remove('round-border')


//creating new element
const newParagraph = document.createElement("p")
newParagraph.innerText = "This is new brand";
newParagraph.classList.add("box")

const container = document.getElementById("container")
container.appendChild(newParagraph)


// const mybody = document.body;
 //mybody.style.backgroundColor = "red";
// console.log(mybody)

// const box2 = document.getElementById("box-2");
// console.log(box2);


// const divs = document.getElementsByTagName('div');
// console.log(divs);




// const boxes = document.getElementsByClassName("box");
// console.log(boxes);



// const random = document.querySelectorAll(".container .random");
// console.log(random)