//reduce

const numsArr = [1,2,3,4,5]

const totalCalculator = numsArr.reduce((acc,currval)=>(acc+currval),0)

// console.log(totalCalculator)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice=shoppingCart.reduce((acc,currval)=>(acc+currval.price),0);
console.log(totalPrice);