// for

for (let i = 0; i < 10; i++) {
    const element = i;   
    //console.log(element);
    
}

for (let i = 1; i<=10; i++) {
 //console.log(`Outer Loop value: ${i}`);
 for (let j = 1; j<=10; j++) {
    //console.log(i + '*' +j +'='+i*j);
 }
}

let myArray = ["tanjiro","zenito","gojo"]
for (let i = 0; i < myArray.length; i++) {
    //console.log(myArray[i]);
}

// break and continue
for (let i = 0; i <=20; i++) {
    if (i == 5){
        console.log(`Detected 5`);
        //break
        continue
    }
    console.log(`Value of i is ${i}`);
}
