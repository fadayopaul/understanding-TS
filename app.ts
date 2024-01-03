// Objects

const person = {
  name: "Paul",
  age: 20,
};
// console.log(person.age);

const person2: {
  name: string;
  age: number;
} = {
  name: "Paul",
  age: 20,
};
// console.log(person2.name);

// Arrays
const person3 = {
  name: "Paul",
  age: 20,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person3.hobbies);

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase());
}

// Tuple
const person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Paul",
  age: 20,
  hobbies: ["Sports", "Coding"],
  role: [2, "Programmer"],
};

person4.role.push("admin");
// person4.role[1] = 10;

console.log(person4.role);
