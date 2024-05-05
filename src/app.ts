// Built-in Generic types
//1. Array
const names: Array<string> = ["portugal ronaldo"]; // string[]
const splitted = names[0].split(" ");

console.log(splitted);

//2. promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  const resolvedData = data;
  console.log(resolvedData);
});

//-------------------------------------------------------------------------
//Custom generic Types
