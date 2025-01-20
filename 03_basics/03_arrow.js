const user={
    username:"anu",
    price:299,

    welcomeMessage: function(){
        //console.log(`${this.username},Welcome to the website`);
        //console.log(this);
        
    }
}

user.welcomeMessage()
user.username="gupta"
user.welcomeMessage()

//console.log(this);

//function one(){            or  const one = function()
//    let username="annu"
//    console.log(this.username);   
//}

//one()

//++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++++++
const one = ()=>{
    let username="annu"
    console.log(this);
}

//one()

            //BASIC ARROW FUNCTION
 //()=> {}

//const addtwo=(num1,num2)=> {
//    return num1+num2
//}
//console.log(addtwo(5,7));

//      IMPLICIT RETURN
// const addtwo=(num1,num2)=> num1+num2 
//const addtwo=(num1,num2)=> (num1+num2) //when return in curly braces use return function and in () don't use return  
const addtwo=(num1,num2)=> ({username:"anu"}) //when returning object use {}  

console.log(addtwo(5,7));
