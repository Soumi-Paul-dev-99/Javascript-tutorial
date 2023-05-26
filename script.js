console.log("hello coders")

//variables,constants , and comments
var score = 45;
var score = 4521;
console.log(score); // redeclare var not use today

let pass = 25;
// let pass=45;
let passd;
console.log(pass); // syntax error 

const ll=45;
// const lb;  //Uncaught SyntaxError: Missing initializer in const declaration 
console.log(ll);


// 2. Data types of values
// 7 data types
// numbers = 1,2,3 ....
// String = "i am string" , "65f"
//Boolean = true, false
// Null Intentionally absence of value
 let score1 = null;
score = 45;
console.log(score1);

//Undefined variable decleared but not initialize
let clients;
console.log(clients);

//object = complex data structure
//symbol = looks like object

//strings
console.log("hello");
let firstName = "wow";
let lastName = "programmer"
console.log(firstName,lastName);

//string concatination
// method 1 using + operator 
// let fullName = firstName + " " + lastName
// console.log(fullName);

//method 2 using template literals
let fullName=`I want to become a ${firstName} ${lastName}`

console.log(fullName);

//getting string character
console.log(firstName[0])

//string methods
console.log(firstName.toLocaleLowerCase());
console.log(lastName.toLocaleUpperCase());
console.log(lastName.indexOf("e"));

//common strings methods
let hobbies = "      my hobbies is singing   singing singing    ";
let results=hobbies.trim(); // extra space remover use trim method  
console.log(hobbies.indexOf("hobbies"));
console.log(results.indexOf("hobbies"))

//indexOf
console.log(results.lastIndexOf("singing"));//case sensitive
console.log(results.includes("singing")) //case sensitive

//slice method
let fullName1 = "soumipaul";
console.log(fullName1.slice(0,5))//Excluding last one 0-4 // it is use if one copy or part of string 

//imp note does not mutate original array
console.log("original string",fullName)
console.log("extract string" , results);

//string "split" method

let favouriteColor="brown blue black grey";
let arrColors = favouriteColor.split(" ");
//string to array
console.log(arrColors);