//
const accountId = 144553
let accountEmail = "mohammed@kazim.com"
var accountPassword = "123456"
accountCity = "hyderabad"
let accountstate;
// accountId = 2 //not allowed
accountEmail = "mohammed@kaizm.com"
accountPassword = "212121212"
accountCity = "telangna"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])


/*
Prefer not to use var
because of issue in block scope and function scope
*/