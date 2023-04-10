/* function foo(){
    console.log("foo")
}
foo()
function bar(){
    console.log("bar")
}
bar() */

function make_avg(number1, number2,number3){
    console.log(number1, number2, number3)
    var average = number1 + number2 + number3 / 3;
    return average
}
const totalAverageResults = make_avg(20, 30, 40) ;
console.log(totalAverageResults);