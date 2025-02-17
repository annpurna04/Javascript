// for of

//[" "," "," "]
//[{ },{ },{ }]

const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

// Maps value unique and inorder
const map = new Map()
map.set('IN',"India")
map.set('USA','United States of America')
map.set('Fr',"France")
//console.log(map);

for (const [key,value] of map){
    //console.log(key,':-', value);
}

//Objects are not iterable
 const obj = {
     name: 'John',    
      age: 30
 }
for (const [key,value] of obj) {
    //console.log(key,':-',value);
    
}