// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "kaizm"

    function two(){
        const webside = "youtube"
        console.log(username);
    }
     // console.log(webside);

    two()

}

one()

if (true){
    const username = "kaizm"
    if (username === "kazim") {
        const webside = " youtube"
        // console.log(username + website);
    }
    // console.log(webside);
}

// console.log(username);


// ************************** interesting *******************************************

console.log(addone(5))
function addone(num){
return num + 1
}


const addTow = function(num){
    return num + 2
}

addTow(5)