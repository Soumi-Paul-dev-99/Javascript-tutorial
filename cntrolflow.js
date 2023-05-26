//control flow
//for loops

//run the specific task 5 times
//without for loop

// for(let i=1;i<=10;i++){
//     console.log("run the task",i)
// }

//usecase of for loop
let dishes = ["biriyani","papri-chat" , "fuchka" ,"pani-poori"]

//access the array values

for(let i=0;i<dishes.length;i++){
    console.log(dishes[i])
}

let j=0;
while(j<dishes.length){
    console.log("favorite dish =",dishes[j]);
    j++; //without this statement we will get infinite loop
}

//do while loop
let g=1;
do{
    console.log("at least run time = ",g);
    g++;

}while(g<=1)

//if , else , else-if statement
let budget = 5000;
if(budget > 6000){
    console.log("will do dinner in hotel")
}else if
    (budget>4500){
console.log("will do dinner in 3 start hotel")
    }
else{
    console.log("run if " + "all "+" condition false")
}
//after 1st condition true control get out of the scope
console.log("I am outside of conditional block");

//break and continue statement
//also called jump statement
//continue statement
//used to skip some values of loop

for(let i=1; i<=10; i++){
    if(i==5){
        continue; //move towords the next itaration
    }console.log("value of i =",i)
}

//break statement
//used to terminate  the looop and control transfer from outside 

for(let i=1;i<=10;i++){
    if(i==5){
        console.log("our desired value is = ",i);
        break;
    }
    console.log("value of i =",i)
}
console.log("now i am outside from the loop now")