type NumberOrString = number | string;
type _ReturnType = "as-number" | "as-string";

function add(
  one: NumberOrString,
  two: NumberOrString,
  returnType?: _ReturnType
) {
  let res: number | string;
  if (typeof one === "number" && typeof two === "number") {
    res = one + two;
  } else {
    res = `${one}${two}`;
  }
  return returnType === "as-string" ? res.toString() : res;
}

console.log(add(26, 25));
console.log(add(26, 26, "as-string"));
console.log(add("Aaron", "Nguyen", "as-string"));
