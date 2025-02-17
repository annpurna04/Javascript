const useremail = []
if (useremail) {
    console.log("got user email");
    
} else {
    console.log("Dont have user email");
    
}

// falsy value
//false , 0, -0,BigInt 0n,"",null,undefined,NaN

//truthy value

// "0",'false'," " ,[],{}, function(){}

// //////////////////     Checking empty array
if(useremail.length === 0){
    console.log("Array is empty");
    
}
///////////// Checking empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}
//************* Interview imp... */
//false == 0 (true)
//false == '' (true)
//0 == '' (true)

// Nullish Coalescing Operator (??): null undefined

let val;
//val = 5 ?? 6
//val = null ?? 10
//val=undefined ??15
val= null ?? 10 ??20
//console.log(val);

///++++++++++++++++ Ternery Operator

// condition ? true : false

const iceprice = 100
iceprice <=80 ? console.log("les thamn 80") : console.log("greater than 80");

