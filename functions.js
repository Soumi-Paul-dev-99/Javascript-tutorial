//functions

//it is simply a place of code which we can use in our program many times
//it is just link a variable holding some piece of code

//declaration

function nameOfFunction(){
    console.log("you are running code present inside the function")

}
//function call
nameOfFunction();

//function expression
let fun = function(){
    console.log("this is an example of function expression")
}
//calling function expresion
fun()

//passing values (arguments and parameters)
let invitation= function(name="default" , time="night"){ //local variable to to this function
    console.log(`you are invited ${name} at the ${time}`)
}
invitation("amit","morning"); //argument
invitation("sumit");

//returning values(how to return value from the function)
let agecal=function(birthyear,currentyear=2023){
    let age=currentyear-birthyear;
   return age;
   console.log("after return statement no code of line will be cxecuted");
}
let funcresult=(agecal(1998))
console.log(`your age is = ${funcresult}`)