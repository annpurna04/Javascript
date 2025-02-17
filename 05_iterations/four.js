//forin in Object
const myOject ={
    js:'javascript',
    cpp:'C++',
    python:'Python'
}
for (const key in myOject) {
    //console.log(`${key} shortcut is for ${myOject[key]}`);
}
//forin array
const  programming = ["js",'rb',"py"]
for (const key in programming) {
   // console.log(programming[key]);
    
}

// forin in Map (map is not iterable)
const map = new Map()
map.set('IN',"India")
map.set('USA','United States of America')
map.set('Fr',"France")

for (const key in map) {
    console.log(`${key} is for ${map[key]}`);
}