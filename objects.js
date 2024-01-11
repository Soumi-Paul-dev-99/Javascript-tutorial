//introduction to objects to javascript
let car = {
    color:"black",
    model:"2022",
    company:"honda"
}
console.log(car)

//accessing the javascript object properties
console.log(car["model"])
console.log(car.model)

let propertyName = "color";
console.log(car[propertyName]);
console.log(car.propertyName)

//modify the object property
car.color = "red"
console.log(car.color)
let obj1 = {
    prop1 : "value1",
    prop2 : "value2"
}

let returnvalue = delete obj1.prop1;
console.log(obj1.prop1, returnvalue);

//function Vs Method