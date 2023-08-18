const user = {
    username: "kaizm",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to webside`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "aleem"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kaizm"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "kaizm"
//    console.log(this.username);
// }

const chai = () => {
    let username = "kaizm"
    console.log(this);
}

//  chai()

// const addTow = (num1, num2) => {
//     return num1 + num2
// }

// const addTow = (num1, num2) => num1 + num2
// const addTow = (num1, num2) => (num1 + num2)

const addTow = (num1, num2) => ({username: "Kzim"})

console.log(addTow(3, 4))

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()