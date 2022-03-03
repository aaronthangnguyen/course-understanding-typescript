function add(one, two) {
    var res;
    if (typeof one === "number" && typeof two === "number") {
        res = one + two;
    }
    else {
        res = "".concat(one).concat(two);
    }
    return res;
}
console.log(add(26, 26));
console.log(add("Aaron", "Nguyen"));
