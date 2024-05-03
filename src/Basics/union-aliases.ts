/* 

// Union Types

//to be flexible with our types, parameters and out logics 
function combine(input1: number | string, input2: number | string) {
  let result: any;

  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + input2.toString();

  return result;
}

const combinedAges = combine(30, 26);
// console.log(combinedAges);

const combinedNames = combine("Paul", "ThaCreator");
// console.log(combinedNames);

//---------------------------------------------------------------------

// Literal Types
function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
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

const combinedAges2 = combine2(30, 26, "as-number");
// console.log(combinedAges);

const combinedStringAges2 = combine2("30", "26", "as-number");
// console.log(combinedStringAges2);

const combinedNames2 = combine2("Paul", "ThaCreator", "as-text");
// console.log(combinedNames);

//---------------------------------------------------------------------

// Type aliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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

const combinedAges3 = combine3(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAge3 = combine3("30", "26", "as-number");
console.log(combinedStringAges2);

const combinedNames3 = combine3("Paul", "ThaCreator", "as-text");
console.log(combinedNames);

  */
