//logical operator

//And && , or || , not !

//example
let password = "qwerty@";
if(password.length >8 && password.includes("@")){
    console.log("pASSWORD STRENGTH IS STRONG")
}else{
    console.log("change your password")
}

//not operator ! true to false and false to true
let status = false;
if(!status){ //change into true
    console.log("your status is= ",status)
}
//priorities
//not
//and , or from left to right
let result = true && true || false && !false
console.log(result)
result = true && true || false && true
console.log(result)
result = true || false && true;
console.log(result)
result = true && true 
console.log(result)

//variables and block scope

//scope >> area where variable is defined or accessible

let score =90; //global scope

if(true){

  let score = 50; //block scope
     console.log(score) //nearest value
}
console.log(score);

//ternary operator (? :)

let age = 24;
let weight=655
if(age>18)
{
    console.log("I am aplicable for vote")
}else{
    console.log("not eligible for vote")
}

let result1 = age > 14 ? weight>55?"quility":"weightloss": "not eligible" ?"not": "fail";
console.log(result1)

//switch statement 

switch(age){
    case 15:
        case 16:
            case 17:
                result="these ages are allowed to sit in the exam";
                break;

                default:
                    result = "not allowed"
}
console.log(age)