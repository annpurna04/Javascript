const user = {               //object literal
    username:'anu',
    loginCount :8,
    signedIn:true,
    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`username: ${this.username}`);
        //console.log(this);
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

//+++++++++++  Constructor function   +++++++++++++

//const promiseone = new Promise()
//const date = new Date()

function User(username,loginCount,isloggedIn ){
    this.username= username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn

    this.greeting  = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userone = User("annnu",12,true)
const usertwo = User("gupta",15,false)

console.log(userone);


// -new 
//1. create empty object known as Instance
//2. Constructor function call becoz of new
//3. argument injected in this keyword
//4. get the function
