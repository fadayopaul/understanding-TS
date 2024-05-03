// Objects

/* In JS */
const person = {
  name: "Paul",
  age: 20,
};
// console.log(person.age);

/* In TS */
const person2: { name: string; age: number } = {
  name: "Ifeoluwa",
  age: 22,
};
// console.log(person2.name);

// Arrays
const person3: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "PaulthaCreator",
  age: 100,
  hobbies: ["Coding", "Desgining"],
};

for (const hobby of person3.hobbies) {
  // console.log(hobby.toUpperCase());
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

// this code below wont work, cause of not same type
// person4.role[1] = 10;

// console.log(person4.role);
for (const role of person4.role) {
  // console.log(role);
}

// Enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person5 = {
  name: "Paul",
  age: 20,
  role: Role.AUTHOR,
};

console.log(person5.role);
// if (person5.role === Role.ADMIN) console.log("is ADMIN");
