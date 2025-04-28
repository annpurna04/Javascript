function SetUsername(username){
    //Complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this,username) // .call for holding reference
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@google.com", "123")
console.log(chai);
