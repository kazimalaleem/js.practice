//  singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "kazim",
    "full name": "mohammedkaizm",
    [mySym]: "myket1",
    age: 19,
    location: "hyderabad",
    email: "kazim@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "kaizm@chatgtp.com"
// Object.freeze(JsUser)
JsUser.email = "kaizm@softwair"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());