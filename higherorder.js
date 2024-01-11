// "use strict"

// const radious =[1,4,7,9,6];
// console.log(this)

// const area = function (radious){
//     return Math.PI * radious*radious;
// }

// const circumference = function (radious){
//     return 2* Math.PI * radious
// };

// const diameter= function (radious){
//     return 2* radious;
// }

// Array.prototype.calculate= function(logic){
//     // console.log(this);
//     const output=[];
//     for(let i=0;i< this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return  console.log(this);;
// }
// console.log(radious.map(area))
// // console.log(radious.calculate(area));


// console.log(Array.prototype.concat("Soumiiiii", "Paull"));

console.log("global this", this);

const Student = {
    roll: "32",
    class: "11",
    biodata: function(name){
        console.log("Object this",this);
    //  return console.log(`${name}, roll ${this.roll} and class ${this.class}`);
    }
}
Student.biodata("Ram");
// Student.biodata("Shyam");

function student(name){
    console.log("function this", this);
   return name
}
student("Leena")