const demon_slayer = ["Tanjiro ","Zenitsu ","Nezuko "]
const jujutsu_kaisen = ["Gojo","Itadori","Maki "]

//demon_slayer.push(jujutsu_kaisen) // insert one array in another array
//console.log(demon_slayer);
//console.log(demon_slayer[3][1]);

//const anime =  demon_slayer.concat(jujutsu_kaisen) //cancat both array
//console.log(anime);

 ///////////////// OR use spread  /////////////

 const anime = [...demon_slayer, ...jujutsu_kaisen] 
 console.log(anime);

const arr = [1,2,3,[4,5,6],7,[8,9,[5,3]]]  //spread whole array
const anotherarr = arr.flat(Infinity)
console.log(anotherarr);


console.log(Array.isArray("annpurna")); //asking is this array


console.log(Array.from("annpurna")); // convert in array
 ////////////////// OR   ////////////////

 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));
 