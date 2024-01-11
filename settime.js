//setTimeOut and setInterval
// setTimeOut = run function "once" after "interval" of time
//setInterval => run function repeatedly ,starting after the interval of time then repeating...
//setTimeOut
//setTimeOut(func| code , delay, arg1 , arg2 , ......)

function greeting(){
    console.log("welcome to our coder dost  family")
}
setTimeout(greeting,5000) //5000ms =  5 sec

function greeting (name){
    console.log(`welcome ${name} to our coder dost family`)
}
setInterval(greeting,3000,"neha")

//Hoisting
//Variable declaration are hoisted to word top of their scope 
//function declaration

// test()
function test(){
    console.log("hello")
}