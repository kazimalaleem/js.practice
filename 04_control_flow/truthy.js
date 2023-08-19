const userEmali = "kazim@.com"

if (userEmali) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BiggInt 0n, "", null, undefined, NaN

// truthy varlues
// "0", 'false', "false", " ", [], {}, function(){}

// if (userEmali.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).lenght === 0) {
     console.log("Object is empty");

}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

// Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
