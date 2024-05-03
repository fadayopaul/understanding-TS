// Function return types
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result is " + num);
}

// printResult(add(5, 5));

/*--------------------------------------------------------------*/

// Function as types
function sum(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number;

combineValues = sum;

// console.log(combineValues(5, 5));

/*--------------------------------------------------------------*/

// Function types and callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(5, 15, (result) => {
  console.log(result);
});
