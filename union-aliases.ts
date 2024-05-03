// Union Types
function combine(input1: number | string, input2: number | string) {
  let result: any;

  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + input2.toString();

  return result;
}

const combineAge = combine(23, 10);
// console.log(combineAge);

const combineNames = combine("Paul ", "Fadayo");
// console.log(combineNames);

// Literal Types
function literal(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result: any;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const literalAge = literal(23, 10, "as-number");
// console.log(literalAge);

const literalStringAge = literal("23", "10", "as-number");
// console.log(literalStringAge);

const literalNames = literal("Paul", " Fadayo", "as-text");
// console.log(literalNames);

// Type Aliases custom types
// Type aliases can be used to "create" your own types.
// You're not limited to storing union types though -
// you can also provide an alias to a (possibly complex) object type.

type combinable = number | string;
type conversionDescriptor = "as-number" | "as-text";

function literal2(
  input1: combinable,
  input2: combinable,
  resultConversion: conversionDescriptor
) {
  let result: any;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  return result;
}

const literalAge2 = literal2(230, 100, "as-number");
console.log(literalAge2);

const literalStringAge2 = literal2("230", "100", "as-number");
console.log(literalStringAge2);

const literalNames2 = literal("Paul", " Ife", "as-text");
console.log(literalNames2);

// Additional example:
type User = {
  name: string;
  age: number;
};

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

const u1 = { name: "paul", age: 20 };

greet(u1);
console.log(isOlder(u1, 22));
