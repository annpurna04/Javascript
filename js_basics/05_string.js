const name="anu"
const repoCount = 90
//console.log(name + repoCount + " Value");


//backtick syntax of string
const newname = new String('annpurna-g')

//console.log(newname[3]);
//console.log(newname.__proto__);

//console.log(newname.length);
//console.log(newname.toUpperCase());
//console.log(newname.charAt(4));
//console.log(newname.indexOf('r'));

const newstring = newname.substring(0,4) //doesn't include last value         annp
console.log(newstring);


const anotherstring = newname.slice(-8,5)
console.log(anotherstring);

//trim can remove space
const newstr='   anu   '
console.log(newstr);
console.log(newstr.trim());

//can replace %20 whitespace with anything
const url = "htttps:/anu27anu%20gupta"
console.log(url.replace('%20','-'));


//check anything in url
console.log(url.includes('anu'));

//convert sting in array based on number
console.log(newname.split('-'));



