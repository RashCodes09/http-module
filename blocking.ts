// const heavyFunction = (a: number) => {
//   let start = new Date().getTime();

import { log } from "console";
import { identity, reject, slice } from "lodash";
import { resolve } from "path";

//   setTimeout(() => {
//     console.log(`Still Loading.......`);
//   }, a);

//   while (new Date().getTime() < start + a) {
//     console.log(`processsing.......`);
//   }
// };

// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");
// heavyFunction(10000);
// console.log("Task5");
// console.log("Ended");

// const task = (cb: any) => {
//   return setTimeout(() => {
//     cb((err: Error, data: string) => {
//       if (err) {
//         throw err;
//       } else {
//         console.log(data);
//       }
//     });
//   }, 0);
// };
// const newTasked = (cb: any) => {
//   return setTimeout(cb(null, "somthing went wrong"), 0);
// };
// newTasked((err: Error, data: string) => {
//   if (err) {
//     throw err;
//   } else {
//     return data;
//   }
// });

// let names = "peter";
// console.log("Task1");
// console.log("Task2");
// console.log("Task3");

// const revStr = (str: string): any => {
//   let chnageVaL: string[] = str.split("");
//   let result = "";
//   for (let i of str) {
//     let popOff: string | undefined = chnageVaL.pop();
//     result = result.concat(popOff!);
//   }
//   return result;
// };
// console.log(revStr("Peter"));

// const revStr2 = (str: string): string => {
//   let result = "";
//   for (let i of str) {
//     result = i + result;
//   }
//   return result;
// };
// console.log(revStr2("Peter"));

const revStr2 = (num: number): number => {
  let result = "";
  let main: string = num.toString();
  for (let i of main) {
    result = i + result;
  }
  return Math.sign(num) * parseInt(result);
};
console.log(revStr2(-10001200));

const captalize = (str: string): string => {
  let result: string = "";
  let word: string = str.slice(0, 1).toUpperCase().concat(str.slice(1));
  return word;
};
console.log(captalize("sonia of god ministries"));

const captalizeEach = (str: string): string => {
  let result: string[] = [];
  let word: string[] = str.split(" ");
  for (let i of word) {
    result.push(i.charAt(0).toUpperCase() + i.slice(1));
  }
  return result.join(" ");
};
console.log(captalizeEach("sonia of god ministries"));
console.clear();

const vowelLetter = (str: string): number => {
  let vlw = ["a", "e", "i", "o", "u"];
  let counter: number = 0;
  let main: string = str.replace(" ", "").toLowerCase();
  let splitWord: string[] = main.split("");
  for (let i of splitWord) {
    if (vlw.includes(i)) {
      counter++;
    }
  }
  return counter;
};
console.log(vowelLetter("This is peter"));

const vowelLetter2 = (str: string): number => {
  let value: number = str.match(/[aeious]/gi)!?.length;
  return value !== undefined ? value : 0;
};
console.log(vowelLetter2("This is peter"));
console.clear();

const vowelLetter3 = (str: string): boolean => {
  let value: number = str.match(/[aeiou]/gi)!?.length;
  if (value === undefined) return false;
  return true;
};
console.log(vowelLetter3("This is peter"));
console.clear();

const vowelLetter4 = (str: string): boolean => {
  let vlw = ["a", "e", "i", "o", "u"];
  let splitWord = str.split(" ")[0];
  return false;
};
console.log(vowelLetter4("this is peter"));
console.clear();

// interface Person {
//   name: string;
//   age: number;
// }
// const ageing = (identity: Person[]) => {
//   for (let i of identity) {
//     console.log(i);
//   }
// };
// const identity: Person[] = [
//   { name: "sonia", age: 23 },
//   { name: "sonia", age: 12 },
//   { name: "sonia", age: 40 },
//   { name: "sonia", age: 24 },
//   { name: "sonia", age: 32 },
//   { name: "sonia", age: 30 },
// ];

// const try1 =  new Promise((resolve, reject)=>{

// })

// try1
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// })
// .finally(()=>{
//   console.log("Completely");

// })
