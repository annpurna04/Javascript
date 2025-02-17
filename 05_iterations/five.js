const coding =["js","py","cpp","java"]

coding.forEach(function(val){
    //console.log(val)
})

// using arrow function

coding.forEach((item) => {
    //console.log(item)
})

function printme(item){
    //console.log(item)
}
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
})

//object in array
const mycoding = [{
    languagename:"javascript",
    languagefilename:"js"
},
{
    languagename:"java",
    languagefilename:"java"
},
{
    languagename:"python",
    languagefilename:"py"
}
]
mycoding.forEach((item)=> {
    console.log(item.languagefilename);
    
})