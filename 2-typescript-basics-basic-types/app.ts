function add(one: number | string, two: number | string) {
  let res: number | string;
  if (typeof one === "number" && typeof two === "number") {
    res = one + two;
  } else {
    res = `${one}${two}`;
  }
  return res;
}

console.log(add(26, 26));
console.log(add("Aaron", "Nguyen"));
