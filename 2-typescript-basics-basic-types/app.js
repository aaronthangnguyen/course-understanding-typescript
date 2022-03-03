function add(one, two) {
    return one + two;
}
function printResult(number) {
    console.log("Result: ".concat(number));
}
function addAndHandle(one, two, callback) {
    var res = one + two;
    callback(res);
}
// printResult(add(5, 12));
var functionAdd;
functionAdd = add;
// console.log(functionAdd(2, 3));
addAndHandle(1, 3, printResult);
