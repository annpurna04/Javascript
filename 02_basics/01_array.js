//Array

const myArr = [0,1,2,3]
console.log(myArr[2])
const myArr1 =["anu","gupta"]
console.log(myArr1[0]);

const myArr2=new Array(1,2,3,5)

///ARRAY METHOD
//myArr.push(4)
//myArr.push(5)
myArr.unshift(9) // add at 0 index in array
myArr.shift() // remove at 0 index in array
//console.log(myArr.includes(3));
//console.log(myArr.indexOf(3));

const newarr = myArr.join() // bound all element & convert array in to string
console.log(newarr);


console.log(myArr);

//******************************slice ,splice ************************** 

console.log("A" , myArr);
const mya=myArr.slice(1,2)
console.log(mya);
console.log("B",myArr);

const myb=myArr.splice(1,2)
console.log("C",myArr);
console.log(myb);

