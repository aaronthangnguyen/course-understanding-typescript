function add(one, two, returnType) {
    var res;
    if (typeof one === "number" && typeof two === "number") {
        res = one + two;
    }
    else {
        res = "".concat(one).concat(two);
    }
    return returnType === "as-string" ? res.toString() : res;
}
console.log(add(26, 25));
console.log(add(26, 26, "as-string"));
console.log(add("Aaron", "Nguyen", "as-string"));
