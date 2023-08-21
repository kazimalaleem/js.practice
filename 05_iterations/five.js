const coding = ["js", "ruby", "ph", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascripet",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "phyphon",
        languageFileName: "ph"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
})