function myfunction(){
    console.log("I was clicked");
}

function mouseover(){
    console.log("mouse over")
}

const keyPressevent = ()  =>{
    console.log("key was pressed")
}

const keyUpevent =() =>{
    console.log("key up pressed")
}

const keyDownevent = () => {
    console.log("key down pressed")
}

//// event listners 

const box3 = document.getElementById("box-3");
box3.addEventListener("click" , (e) =>  {
    console.log("click by event",e)
})

// box3.addEventListener("mousemove" , (e) =>  {
//     console.log("event object",e.clientX, e.clientY);
// })
 box3.addEventListener( 'click' , () =>{
    console.log("clicked on box")
 })

 const container = document.getElementById("container")
 container.addEventListener( 'click' , () =>{
    console.log("clicked on container")
 })

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("keydown" , (e) =>  {
    console.log("key", e.key);
})

nameInput.addEventListener('focus', (e) => {
    console.log('key',e)
})