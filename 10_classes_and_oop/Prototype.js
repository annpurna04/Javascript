//let myName = "Annpurna    "

//console.log(myName.trim().length);


let myHeros =  ["thor" , "spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.annpurna = function(){
    console.log(`annpurna is present in all objects`);
    
}

Array.prototype.heyanu = function(){
    console.log(`Anu says hello`);
    
}
 //Power given to object
//heroPower.annpurna()
myHeros.annpurna()

// power given to array
myHeros.heyanu()
//heroPower.heyanu()



// +++++++++++ Inheritance     ++++++++++++++++=============

const User = {
    name: "anu",
    email: "anuexample@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ =User

// modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "JavaScript"

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
     
}

anotherUsername.truelength()
"anu".truelength()
"gupta".truelength()