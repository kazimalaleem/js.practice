const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc +currval, 0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js counrse",
        price: 999
    },
    {
        itemName: "pht counrse",
        price: 999
    },
    {
        itemName: "mobile dev counrse",
        price: 999
    },
    {
        itemName: "data science counrse",
        price: 12999
    },
]

const priceToPay = shoppingCard.reduce ((acc, item) => acc + item.price, 0)

console.log(priceToPay);