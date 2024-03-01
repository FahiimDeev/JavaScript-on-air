const accountId = 4534534
let accountEmail = "fahim@gmail.com"
var password = "12345"
accountCity = "bangladesh"
let accountState;

//accountId = 2 //not allowed, as it has already assigned to const

accountEmail = "err@gmail.com"
password = "234344"
accountCity = "swit"


console.log(accountId);

//we shouldnt use the var, because of the problem of scope

console.table([
    accountId, accountEmail, password, accountCity, accountState
])