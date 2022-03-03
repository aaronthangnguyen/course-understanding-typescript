function add(one: number, two: number) {
  return one + two;
}

function printResult(number: number) {
  console.log(`Result: ${number}`);
}

printResult(add(5, 12));

let functionAdd: (arg0: number, arg1: number) => number;
functionAdd = add;

console.log(functionAdd(2, 3));
