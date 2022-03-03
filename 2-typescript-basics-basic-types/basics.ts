function add(
  one: number,
  two: number,
  showResult: boolean,
  resultPhrase: string
) {
  showResult && console.log(`${resultPhrase}${one + two}`);
}

const one = 5;
const two = 2.8;
const showResult = true;
const resultPhrase = "Result: ";
add(one, two, showResult, resultPhrase);
