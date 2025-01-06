//singleton object.create{}


// object literals

const mysms =Symbol("key") // defining symbol

const JSUser = {
    name:"Annpurna",
    mysms:"mykeys", //using symbol as key
    age: 23,
    email: "anu04@gmail.com",
    location :"Kanpur",
    isLoggedin: false,
    lastlogindays:["Monday","Saturday"]
}
//console.log(JSUser);
//JSUser.email="annpurna@gmail.com"
//console.log(JSUser);

//console.log(JSUser.email);
//console.log(JSUser["email"]); // as email is string so use ""

//console.log(JSUser["mysms"]); 

//console.log(JSUser);

//Object.freeze(JSUser) // Not change name it will freeze the oject
//JSUser.name="Annpurna Gupta"
//console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello, I am Anu");
}
console.log(JSUser.greeting); //[Function (anonymous)]
console.log(JSUser.greeting()); //Hello, I am Anu

JSUser.twogreeting = function(){
    console.log(`Hello, I am ${this.name}`) // through this. can access any object
}
console.log(JSUser.twogreeting()); //Hello, I am Annpurna
