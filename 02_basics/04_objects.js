// const instaUser = new Object()  Singleton object
const instaUser ={} //non singleton object
instaUser.id="966sgg"
instaUser.name="Anu"
instaUser.isLoggedIn = false

//console.log(instaUser);
// ********************** Object within object
const regularUser = {
    email:"anu@gmail.com",
    fullname:{
        userfullname:{
            firtname:"annpurna",
            lastname:"gupta"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firtname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj3 ={5:"a",6:"b"}

//const  obj4={obj1,obj2,obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3} // using spread
//console.log(obj4);
 
//array of object
const user = [
    
    {
        id:1,
        email:"anu@gmail.com"
    },
    {
        id:1,
        email:"anu@gmail.com"
    }, 
    {
        id:1,
        email:"anu@gmail.com"
    }
]
user[1].email
console.log(instaUser); //{ id: '966sgg', name: 'Anu', isLoggedIn: false }
console.log(Object.keys(instaUser)); // keys are stored in array [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(instaUser)); //[ '966sgg', 'Anu', false ]
console.log(Object.entries(instaUser)); //[ [ 'id', '966sgg' ], [ 'name', 'Anu' ], [ 'isLoggedIn', false ] ]
 //asking if having value
 console.log(instaUser.hasOwnProperty('isLoggedIn'));
 
