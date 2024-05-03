// The Unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
  //   console.log(userName);
}

// The never type
function generaeError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generaeError("An error occurred!", 500);
console.log(result);
