//var  c=30
let a=300
if(true){
    let a=10
    const b=20
    //console.log("INNER",a);
    
}
//console.log(a);
//console.log(b);

function one(){
    const username='anu'
    function two(){
        const password='123'
        //console.log(username)
    }
    //console.log(password);
    two()
}
one()

if(true){
    const username="Gupta"
    if(username==="Gupta"){
        const password=" 34"
        //console.log(username+ password);
        
    }
    //console.log(password);
    
}
//console.log(username);
 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++=addone(5)

console.log(addone(5)) //6
function addone(num){
    return num+1
}


addtwo(5)  // Error: cannot access function before dec laration  
const addtwo=function(num){
    return num+2
}    
