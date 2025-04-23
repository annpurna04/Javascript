const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        }, 1000);
})

promiseOne.then(function(){
    console.log('Promise one is complete');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "JS" ,email: 'javascript@example.com'}) //passing data
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "anu",password:"123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username  
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);  
}).finally(() => console.log("The Promise is either resolved or rejected"))


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript",password:"abcd"})
        } else {
            reject('ERROR: Js went wrong')
        }
    },1000) 
});

async function consumePromisefive(){
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    } 
}

consumePromisefive()


//async function getallusers() {
//   try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//   } catch (error) {
//    console.log("E:",error);       
//   }    
//}
//getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))