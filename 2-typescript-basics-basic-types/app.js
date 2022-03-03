// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READER"] = 2] = "READER";
})(Role || (Role = {}));
// Object
var person = {
    name: "Aaron",
    age: 26,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(person);
console.log(person.name);
// Array
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
