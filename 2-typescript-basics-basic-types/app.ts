// Object
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string] /* Tuple */;
} = {
  name: "Aaron",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

console.log(person);
console.log(person.name);

// Array
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
