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

type combinable = number | string;

function literal2(
  input1: combinable,
  input2: combinable,
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

const literalAge2 = literal2(230, 100, "as-number");
console.log(literalAge2);

const literalStringAge2 = literal2("230", "100", "as-number");
console.log(literalStringAge2);

const literalNames2 = literal("Paul", " Ife", "as-text");
console.log(literalNames2);
