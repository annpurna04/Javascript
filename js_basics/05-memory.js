// Stack (Primitive) , Heap(Non-Primitive)

let myName = "anu"
let anotherName=myName

console.log(anotherName);

anotherName= "gupta"
console.log(myName);
console.log(anotherName);

// declaration of object
let userone={
    email:"anu@gmail.com",
    age:23
}
let usertwo=userone

usertwo.email="gupta@gmail.com"

console.log(usertwo.email);
console.log(userone.email);

