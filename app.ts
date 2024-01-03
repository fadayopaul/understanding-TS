// Union Types
function combine(input1: number | string, input2: number | string) {
  let result: any;

  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + input2.toString();

  return result;
}

const combineAge = combine(23, 10);
console.log(combineAge);

const combineNames = combine("Paul ", "Fadayo");
console.log(combineNames);
