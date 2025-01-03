//Date

let mydate=new Date()

//console.log(mydate.toDateString());
//console.log(mydate.toString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate);      //object

//let mycreatetdate = new Date(2025,0,6) //in JS month start from 0

//let mycreatetdate = new Date(2025,0,6,6,12) //in JS month start from 0

let mycreatetdate=new Date("2025-01-6") //when written in y-m-d format then month start from 1
//console.log(mycreatetdate.toLocaleString());  

let mytime = Date.now()
//console.log(mytime);
//console.log(mycreatetdate.getTime());
//console.log(Math.floor(Date.now()/1000)); //***to convert in to second*****

let newdate=new Date()
//console.log(newdate);
//console.log(newdate.getMonth());

newdate.toLocaleString('default',{
    weekday: "long"
    
})

