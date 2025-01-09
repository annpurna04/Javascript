function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("U");
    
}
//sayMyName // function reference
//sayMyName()//function execution
function addTwoNumbers(number1,number2){
    //console.log(number1 + number2);
    //let result=number1+number2
    //return result;
    return number1+number2
    
}
const result = addTwoNumbers(3,5)
//console.log("Result :" , result);

function loginusermsg(username){
    if(username === undefined){
        console.log("Please enter a username");
        
    }
    return `${username} just logged in`
}

//console.log(loginusermsg("anu"))
//console.log(loginusermsg()) //undefined  


// does not know how many argument will come
function calculateCartPrice(val1,val2,...num1){ ///... rest operator
    return num1
}
console.log(calculateCartPrice(7,6,4,9));
 

//++++++++++++++++++++++++ Passing object in function
const user={
    username:"anu",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user) //calling function  

// can pass directly object
handleObject({
    username:"gupta",
    price :299
})

//Passing Array  in function 

const myArray = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]
}
//console.log(returnsecondvalue(myArray));
console.log(returnsecondvalue([700,8000,9000,10000]));
