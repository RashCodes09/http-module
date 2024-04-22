const testFunction = () => {
  console.log("Awesome...!");
};
const testFunctionII = () => {
  console.log("Awesome Class...!");
};

class House {
  constructor(public name: string, public place: string) {
    this.name = name;
    this.place = place;
  }

  readPlace() {
    console.log(this.place);
  }
}
// export let myPlace = "Ajegunle";
export { testFunction, testFunctionII, learn, learn1, learn2, learn3, House };

const learn = () => {
  console.log("Blocking code 1");
};
const learn1 = () => {
  console.log("Blocking code 2");
};

const learn2 = (b: number) => {
  let start = new Date().getTime();
  while (new Date().getTime() < start + b) {
    console.log(`while loop is use when writing blocking code`);
  }
};
const learn3 = () => {
  console.log("Blocking code 4");
};

export class Modulars {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  readAge() {
    console.log(this.age);
  }
}
export let inModulars = new Modulars("James", 12);

export const unblocking1 = () => {
  console.log("Unblocking code 1");
};
export const unblocking2 = (a: number) => {
  setTimeout(() => {
    console.log(
      `unblocking code takes SetTimeout before it can work so the rest of the code doesn't depend on the first one also known as a heavy code`
    );
  }, a);
};
export const unblocking3 = () => {
  console.log("Unblocking code 3");
};
