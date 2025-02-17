// accumulator
const mynums= [1,2,3]
//const total=mynums.reduce(function(acc,curval){
//    console.log(`acc:${acc} and current :${curval}`);
//    
//    return acc+curval
//},0)

const total = mynums.reduce((acc,curr) => acc+curr,0)
//console.log(total);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:1999
    },
    {
        itemName:"daa science course",
        price:19999
    },
]

const price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
//console.log(price);