//numbers
let score = 50;
console.log(score, (typeof(score)));
//mathamatical operators */+-% ** 

// let result = score /2; // give quotient
// let result= score%2; // give reminder
//mathamatical expression
let result = score *2 + (4*3) -8 / 2 %4;
console.log(result);
//using priority and precedence
//1 ()
//2 **
//3 * / % (from left to right)
//4 + - (from left to right)

//concatinations of Numbers
let newresult = "my total numbers is = " +result;
console.log(newresult) ;

//loose equality (==) vs scrict equality (===)
//loose equality operator ==
let age = 22; //number type value
console.log(age=="22"); // focus only on value but not type

console.log(age != "22")

