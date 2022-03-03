function add(one, two) {
    return one + two;
}
function printResult(number) {
    console.log("Result: ".concat(number));
}
printResult(add(5, 12));
var functionAdd;
functionAdd = add;
console.log(functionAdd(2, 3));
