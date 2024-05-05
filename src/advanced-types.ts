/*
// Intersection type- combining other types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployeee = Admin & Employee;

const e1: ElevatedEmployeee = {
  name: "Paul",
  privileges: ["create-server", "delete-user"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add(a: Combinable, b: Combinable) {
  // type guard
  return typeof a === "string" || typeof b === "string"
    ? a.toString() + b.toString()
    : a + b;
}
console.log(add(2, 2));

type UnknownEmployee = Employee | Admin;

function PrintEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // type guard
  "privileges" in emp ? console.log("Priviledges: " + emp.privileges) : null;
  "startDate" in emp ? console.log("Start Date: " + emp.startDate) : null;
}

PrintEmployeeInformation(e1);

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//
// Type Casting

// method:1
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")
);

userInputElement.value = "Hi, there!";

//method:2
const userInputElement2 = document.getElementById(
  "user-input-2"
) as HTMLInputElement;

userInputElement2.value = "Hello 👋";

// 
// Index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  userName: "Must start with a character",
};

// Funtion overloads
type Combine = string | number;
type Numeral = number | boolean;

type Universe = Combine | Numeral;

function sum(a: string, b: string): string;
function sum(a: string, b: number): string;
function sum(a: number, b: string): string;
function sum(a: number, b: number): number;
function sum(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  else return a + b;
}

const result = sum(21.396, 0.9);

//
// Optional Chaining
const fethedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fethedUserData?.job?.description);

// Nullish Coalescing
const userInput = undefined;
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
*/
