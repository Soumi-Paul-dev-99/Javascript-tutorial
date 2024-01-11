//arrow function(es6)
//special form of function expression
//it allows us to write function more fast because
//no need to use function keyword
//no need to use paranthesis() in case of single parameters
// no need to use curely{} if single line code in function
//no need to use return statement if single line code in function

//function expression

let invitation=(name)=>{
    return `welcome ${name} to this event`
}
console.log(invitation("colors"))

//passing function as an Argument(higher order function example)

let upperCase = function(str){
    return str.toUpperCase();
}
let lowerCase = function(str){
    return str.toLowerCase()
}

let transformer = function(str,fun){
    return fun(str)
}
console.log(transformer("hello",lowerCase))

//function

//function returning another function
let compliment=function(msg){
    return function(name){
        console.log(`${msg}  ${name}`)
    }
};
//2nd method
//console.log(compliment("you are good coder")("carry"))

let complimented = compliment("you are good coder");
complimented("carry")

//compliment is higher order function

//practice
let func2 = function(a,b){
    return a*b;
}
console.log(func2(2,4))

let func =(a,b)=>a*b
console.log(func2(2,4))

function result(a,b){
    return a*b;
}
console.log(result(2,5))

let result4 = function(str){
    return str.toUpperCase()
}
let result2 = function(str){
    return str.toLowerCase()
}
let result3 = function(str,res){
return res(str);
}
console.log(result3("hello",result4));
//function

//immediately invoked function expression
//executed only once

//now this is expression


(function (name){
    console.log("this function will never execute again",name)
})("IIFE")

//setTimeOut and setInterval
//setTimeOut -> Run Function "once" after "interval" of time
//setInterval -> Run function repeatedly ,Starting after the interval of time, then repeating....
//stTimeOut
//setTimeOut(func(code , delay , argu))