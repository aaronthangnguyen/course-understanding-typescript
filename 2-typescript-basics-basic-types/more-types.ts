// Enum
enum Role {
  ADMIN,
  AUTHOR,
  READER,
}

// Object
const person = {
  name: "Aaron",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person);
console.log(person.name);

// Array
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
