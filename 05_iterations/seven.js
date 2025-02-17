const myNums = [1,2,3,4,5,6,7,8,9,10]

//const num= myNums.map((num)=> { return num+10})

const num = myNums
    .map((newnum) => newnum*10)
    .map((newnum)=>newnum+1)
    .filter((newnum)=> newnum>=40)
console.log(num);
