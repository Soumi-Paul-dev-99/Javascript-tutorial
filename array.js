//Arrays

let dishes = ["biriyani" , "Chat" , "Parathay"];
//access
console.log(dishes[2])

//Modify the array
dishes[0] = "karahai";
console.log(dishes)

// Array method
//join method
console.log(dishes.join(" & "))

//indexOf
console.log(dishes.indexOf("Chat")) //case

// concat method 
let newDishes = ["sweet-dish" , "pani-puri"];
console.log(dishes.concat(newDishes));
let updateDishes = dishes.concat(newDishes)
//length method
console.log(updateDishes.length)
//push method
console.log(updateDishes.push("hally")) // return new length of array
console.log(updateDishes)

//methods pop()
console.log(updateDishes.pop("Chat"))
console.log(updateDishes)

//boolean values and comparison operators
let booleanType = true;
let stringType = "true";
console.log(typeof booleanType, typeof stringType);

//methods return boolean values
let email = "sp@gmail.com";
let booleanvalue= email.includes("@");
console.log(booleanvalue)

//comparison operators always return boolean value
// == ,===, !== , !=
// >, >=
// < , <=

let points = 23
console.log(points == "23")
console.log(points === "23")
console.log(points != "23")
console.log(points > 10)