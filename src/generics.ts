/*


// Built-in Generic types
//1. Array
const names: Array<string> = ["portugal ronaldo"]; // string[]
const splitted = names[0].split(" ");

// console.log(splitted);

//2. promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  const resolvedData = data;
  //   console.log(resolvedData);
});

//-------------------------------------------------------------------------
// Custom Generic Types
function merge<T, U>(objA: T, objB: U) {
  //return Object.assign(objA, objB);
  return { ...objA, ...objB };
}
const mergedObj = merge({ name: "Paul" }, { age: 25 });
// console.log(mergedObj.age, mergedObj.name);

// Working with constraints- custom generic type
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}
const mergedObj2 = merge2(
  { name: "Paul", hobbies: ["coding", "gamming"] },
  { age: 20 }
);
// console.log(mergedObj2);

// More custom generic examples
type Lengthy = {
  length: number;
};

function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionText = "";

  if (element.length < 1) descriptionText = "Got no element";
  else if (element.length > 1)
    descriptionText = "Got " + element.length + " elements";

  return [element, descriptionText];
}

// console.log(countAndPrint(["sports", "gaming"]));

// The Key of constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key];
}

// console.log(extractAndConvert({ name: "Paul" }, "name"));

//  Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Paul");
textStorage.addItem("Elijah");
textStorage.addItem("Jude");
textStorage.removeItem("Paul");

// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(2);
numberStorage.addItem(4);
numberStorage.addItem(6);
numberStorage.removeItem(2);

// console.log(numberStorage.getItems());

// Generic utility types
//1. Partial
type CourseGoal = {
  title: string;
  description: string;
  completeUntil: Date;
};

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
const created = createCourseGoal("SEN", "Software Engineering", new Date());
// console.log(created);

//2. Readonly
const nameList: Readonly<string[]> = ["Paul", "Victor"];
// nameList.push("Marve");
// console.log(nameList);

 */
