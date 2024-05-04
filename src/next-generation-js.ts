/*


//spread operator
const stress = ["reading", "writing"];
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...stress];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

//spread operator
const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person, class: "500Level" };
console.log(copiedPerson);

//rest operator
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(2, 4, 6, 8);
console.log(addedNumbers);

// Array & Object destructuring
const [first, second, ...remaining] = activeHobbies;
console.log(first, second, remaining);

const { age: baseAge } = person;
console.log(baseAge);
*/
