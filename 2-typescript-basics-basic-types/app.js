function add(one, two, showResult, resultPhrase) {
    showResult && console.log("".concat(resultPhrase).concat(one + two));
}
var one = 5;
var two = 2.8;
var showResult = true;
var resultPhrase = "Result: ";
add(one, two, showResult, resultPhrase);
