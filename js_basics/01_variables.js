const accountId=4562
var accountEmail="ann@gmail.com"
let accountPassword="1234"
accountCity="Kanpur";

// accountId=8 not allowed

console.log(accountId);

/*Prefer not to use var becoz of issue in block scope and functional scope*/
accountEmail="annpu@gmail.com"
accountPassword="6549"
accountCity="bangu"

console.table([accountEmail,accountId,accountPassword,accountCity])
