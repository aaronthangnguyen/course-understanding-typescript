function add(one: number, two: number) {
  return one + two;
}

function printResult(number: number) {
  console.log(`Result: ${number}`);
}

function addAndHandle(
  one: number,
  two: number,
  callback: (number: number) => void
) {
  const res = one + two;
  callback(res);
}

// printResult(add(5, 12));

let functionAdd: (arg0: number, arg1: number) => number;
functionAdd = add;

// console.log(functionAdd(2, 3));

addAndHandle(1, 3, printResult);
