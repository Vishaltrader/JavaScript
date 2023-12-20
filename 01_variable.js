const accountId = 1444553
let accountEmail = "vishal@google.com"
var accountPassword ="123345"
accountCity = "kolkata"

// accountId = 2 not allowed

accountEmail = "hsg@gmail.com"
accountPassword = "72726376"
accountCity = "patna"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// for variable declaration you should use only let keyword instead of var(because of issue in block scope {} and functional scope) and no keyword