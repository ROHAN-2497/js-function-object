const shoppingCart = {
    phone :2,
    pen : 34,
    book : 4,
    shoes : 5,
    table : 1,
}
// const keys = Object.keys(shoppingCart);             
// console.log(keys);
// const values = Object.values(shoppingCart);
// console.log(values);

// for(i = 0 ; i < keys.length; i++){
//   var propertyName = keys[i];
//   var propertyValue = shoppingCart[propertyName];
//   console.log(propertyName, propertyValue)
// }

const student = {
    name : "rohan",
    roll : 5,
    class : 8,
    id : 909
}
var keys = Object.keys(student)
console.log(keys);
var values = Object.values(student);
console.log(values);

for(i = 0 ; i < keys.length; i++){
var propertyName = keys[i]
var propertyValue = student[propertyName]; 
console.log(propertyName, propertyValue);
}