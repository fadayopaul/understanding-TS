/*

// interface - used to define the structure of an object.
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Paul",
  age: 30,

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there, I'm");

// Interface as Function
interface sumFn {
  (a: number, n: number): number;
}

let sum: sumFn;
sum = (n1: number, n2: number) => n1 + n2;

const res = sum(3, 3);
console.log(res);

// type as function
type AddFn = (a: number, b: number) => number;

let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;

const result = add(2, 2);
console.log(result);

  */
