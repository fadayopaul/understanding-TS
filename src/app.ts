/*

*/
// First Class decorator
function Logger(constructor: Function) {
  // console.log("Logging...");
  // console.log(constructor);
}

@Logger
class Person {
  name = "Paul";

  constructor() {
    // console.log("Creating person object...");
  }
}

const pers = new Person();
// console.log(pers);

// decorator factories
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    // console.log(constructor);
  };
}

@Logger2("LOGGING - PERSON")
class Person2 {
  name = "Paul";

  constructor() {
    // console.log("Creating person object...");
  }
}

//Building more beautiful decorators
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const object = new constructor();
    const hookEL = document.getElementById(hookId);

    hookEL ? (hookEL.innerHTML = template) : null;
    hookEL
      ? (hookEL.querySelector("h1")!.textContent = object.Department)
      : null;
  };
}

@Logger2("School-logging")
@WithTemplate("<h1>School Object</h1>", "app")
class School {
  Department = "Software Engineering";
  course = "SEN";
  code = 500;

  constructor() {
    console.log("Creating a school object");
  }
}
