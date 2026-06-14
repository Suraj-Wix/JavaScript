const accountId = 144553
let accountEmail ="surajsharma87899@gmail.com"
var accountPassword= "12345"
accountCity = "Jaipur"
let accountState;

// accountId =2 // not allowed
accountEmail = "suraj1955@gmail.com"
accountPassword = "1234"
accountCity ="Patna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])