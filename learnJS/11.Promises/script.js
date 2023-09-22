const ticket = new Promise(function (resolve, reject){
    const isBoarded = true;
    if(isBoarded){
        resolve('You are  in the Flight');
    } else{
        reject('your flight has been cancelled')
    }
})

ticket.then((data) => {
    console.log('wohoo', data);
}).catch((data) =>{
console.log("oh no" , data);
}).finally(() =>{
    console.log("i will always executed")
});