const score= 30 //here core is number tha is implicitly taken

const bal=new Number(100)  //Explicitly defining bal will be number
console.log(bal);

console.log(bal.toString().length); //number is converted in string then can use all properties of string
console.log(bal.toFixed(2)); // to take precision value
 
const nm=125.8964
console.log(nm.toPrecision(2));

const hundreds=100000
console.log(hundreds.toLocaleString()); //in US value
console.log(hundreds.toLocaleString('en-IN')); //in Indian value


//*************** MATHS **************/

console.log(Math);

//Mahs Function

console.log(Math.abs(-7));
console.log(Math.round(5.7));
console.log(Math.ceil(4.2)); //upper value
console.log(Math.floor(5.6)); //lower value
console.log(Math.min(3,5,7,9,2)); //min value
console.log(Math.max(3,5,7,9,2)); //max value


console.log(Math.random()); // always give vale between 0 & 1
console.log((Math.random()*10) +1);

//to ge number between 10 and 20 (+1 is done to avoid multiply by zero )
const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min+1)) + min);

