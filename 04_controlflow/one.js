 // if
 
if(true){

}
//const temperature =41
//if(temperature === 41){
//    console.log("Temperature is 41")
//}
//console.log("temperature greater than 50");

//<,>,<=,>=,==,===(also check type of )

//const score = 200

//if(score > 100){
//    let power = "fly"
//    console.log(`User power : ${power}`);
//    
//}
//console.log(`User power : ${power}`);

//if(){

//}
//else if(){
//}
//else{}

//const balance = 1000
//if(balance<500){
//    console.log("Less tham 500");
//} else if(balance<750){
//    console.log("Less tham 750");
//}
//else if(balance<900){
//    console.log("Less tham 900");
//}
//else{
//    console.log("More tham 900");
//}

const userLoggedIn = true
const debitcard = true 
const loggedinFromgoogle= false
const loggedinfromemail = true

if(userLoggedIn && debitcard ){
    console.log("Allow to buy course");
}

if(loggedinFromgoogle || loggedinfromemail){
    console.log("user logged in");
    
}