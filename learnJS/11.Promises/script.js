const ticket = new Promise(function (resolve, reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('You are not in the Flight');
    } else{
        reject('your flight has been cancelled')
    }
})