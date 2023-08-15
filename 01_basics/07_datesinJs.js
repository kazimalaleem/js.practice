let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 ,23)
// let myCreatedDate = new Date(2023, 0 ,23, 5,3)
// let myCreatedDate = new Date("2023-01-15")
let myCreatedDate = new Date("01-15-2023")

// console.log(myCreatedDate.toLocaleDateString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.gitDay()} and the time`

newDate.toLocaleDateString('default', {
    weekday:"long"
    
})
