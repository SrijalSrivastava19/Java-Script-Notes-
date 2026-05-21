const accountID = 19102006 ; //acccount ID can't be changed so we use const
let accountEmail = "srijalsrivastava0005@gmail.com";
var accountPassword = "srijal@123";
accountCity = "Lucknow";
let accountState ;


// accountID = 2 it will be not allowed because accountID is a constant variable

accountEmail = "hg.com";
accountPassword = "hg@123";
accountCity = "Delhi";

console.log(accountID);

// preger not to use VAR beacause it is function scoped and can lead to unexpected behavior. LET and CONST are block scoped and provide better control over variable declarations.

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]) ;
//  we use big bracket to enter all the values in the table and it will show in the form of table in the console.