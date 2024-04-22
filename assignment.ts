import moment from "moment";
import { compose, pipe } from "lodash/fp";
import { curry, result, set } from "lodash";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { log, time, timeEnd } from "console";
import { MarkOptions } from "perf_hooks";

// // function filtered(
// //   arr: any[],
// //   callback: (element: any, index: number, array: any[]) => boolean
// // ): any[] {
// //   const filteredArray: any[] = [];

// //   for (let i = 0; i < arr.length; i++) {
// //     if (callback(arr[i], i, arr)) {
// //       filteredArray.push(arr[i]);
// //     }
// //   }
// //   return filteredArray;
// // }
// // const inputs: string[] = [
// //   "terry",
// //   "soni",
// //   "james",
// //   "calb",
// //   "odinaka",
// //   "soo",
// //   "kelechi",
// //   "roland",
// //   "chinedu",
// // ];
// // const result = filtered(inputs, (str) => str.length < 5);
// // console.log(result);

// // ASSIGNMENT THREE

// class School {
//   a: string;
//   constructor(a: string) {
//     this.a = a;
//   }

//   student(): any[] {
//     let rep = (a: number, b: number) => {
//       return Math.floor(Math.random() * (a - b + 1) + b);
//     };
//     return Array.from({ length: rep(5, 4) }, () => {
//       let score: number = rep(95, 45);
//       let sets: string[] = [
//         "setOne",
//         "setTwo",
//         "setThree",
//         "setFour",
//         "setFive",
//         "setSix",
//       ];
//       return {
//         set: sets[Math.floor(Math.random() * sets.length)],
//         score: score,
//       };
//     });
//   }
//   students = this.student();
//   smarteststud(): any[] {
//     let students = this.student();
//     console.log(students);
//     return students.filter((el) => {
//       return (
//         el.score ===
//         Math.max(
//           ...students.map((el) => {
//             return el.score;
//           })
//         )
//       );
//     });
//   }

//   average() {
//     console.log(this.students);

//     return (
//       parseFloat(
//         this.students
//           .map((el) => {
//             return el.score;
//           })
//           .reduce((a, b) => {
//             return a + b;
//           })
//           .toFixed(2)
//       ) / this.students.length
//     );
//   }

//   totalSet() {
//     return this.students.length;
//   }

//   timesTable = (m: number) => {
//     for (let i = 1; i <= 12; i++) {
//       for (let j = 1; j <= 12; j++) {
//         if (j === m) {
//           console.log(`${j} x ${i} = ${i * j}`);
//         }
//       }
//     }
//   };

//   addition = (n: number) => {
//     for (let i = 1; i <= 12; i++) {
//       for (let j = 1; j <= 12; j++) {
//         if (j === n) {
//           console.log(`${j} + ${i} = ${i + j}`);
//         }
//       }
//     }
//   };

//   minus = (p: number) => {
//     for (let i = 1; i <= 12; i++) {
//       for (let j = 1; j <= 12; j++) {
//         if (j === p) {
//           console.log(`${j} - ${i} = ${j - i}`);
//         }
//       }
//     }
//   };

//   division = (d: number) => {
//     for (let i = 1; i <= 12; i++) {
//       for (let j = 1; j <= 12; j++) {
//         if (j === d) {
//           console.log(`${j} / ${i} = ${j / i}`);
//         }
//       }
//     }
//   };

//   mapped = (a: number[]) => {
//     return a;
//   };

//   water = () => {
//     let totslIntake: number = 60;

//     let Intake: any = prompt("what is your water intake  for the day:");

//     if (Intake > totslIntake) {
//       return "You've taken more than needed for the day";
//     } else if (Intake !== totslIntake) {
//       return `You still have ${totslIntake - Intake} cl to take in for the day`;
//     }
//   };

//   ballFnction = () => {
//     let balls: string[] = ["red", "green", "orange", "blue"];
//     let choice = Math.floor(Math.random() * (2 - 0 + 1) + 0);
//     let myChoice: string = prompt("This is my choice color:");
//     while (balls[choice] !== myChoice) {
//       //   let system: any = balls[choice];
//       //   console.log("system choice", system);
//       myChoice = prompt("this is my choice color:");
//     }
//     if (balls[choice] === myChoice) {
//       return "correct";
//     } else {
//       return "wrong";
//     }
//   };

//   drinkWaterApplication = () => {
//     console.clear();

//     let gage = 60;
//     let litres = 0;
//     let measurement = 0;
//     while (true) {
//       let question = prompt("how many litres have you taken today: ");
//       if (parseInt(question) >= gage) {
//         console.log(`Sorry you can't take above or up to 60cl in a day`);
//         continue;
//       } else {
//         litres += parseInt(question);
//         if (litres !== gage && litres < gage) {
//           console.log(
//             `You've taken ${parseInt(
//               question
//             )}cl and its now the total of ${litres}cl, and you have ${
//               gage - litres
//             }cl to go`
//           );
//         } else if (litres > gage) {
//           console.log(`Sorry you can't take above 60cl in a day`);
//           litres -= parseInt(question);
//           measurement -= 1;
//         }
//         measurement += 1;
//       }
//       if (litres === gage) {
//         console.log(
//           `Hurray you've successfully met the daily target upon ${measurement} drinks`
//         );
//         break;
//       }
//     }
//   };
// }

// let inSchool = new School("clasess");
// console.log(inSchool.drinkWaterApplication());
// console.log(inSchool.mapped([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// const tryA = (a: number) => {
//   let begin = new Date().getTime();
//   while (new Date().getTime() < begin + a) {
//     console.log("Processing......");
//   }
// };
// tryA(1000);
// const tryB = (a: number, b: number) => {
//   return a + b;
// };
// console.log(tryB(2, 4));
// const tryC = () => {
//   setTimeout(() => {
//     console.log(
//       "This is an UNBLOCKING CODE which doesnt depend on other codes to run on it on"
//     );
//   }, 1000);
// };
// tryC();

// const tryD = (a: number, b: number) => {
//   return a - b;
// };
// console.log(tryD(10, 5));

// const capitalText = (strt: string): string => {
//   let result2: string[] = [];
//   let words: string[] = strt.split(" ");
//   for (let i of words) {
//     result2.push(i[0].toUpperCase().concat(i.slice(1)));
//   }
//   return result2.join(" ");
// };
// console.log(capitalText("this is the best day ever"));

// // COMING BACK TO THIS LATER ON
// const test = (input: string): string => {
//   let alphabeth: string = "abcdefghijklmnopqrstuvwxyz";
//   let result = "";
//   for (let i = 0; i < input.length; i++) {
//     let chaRat = input[i].toLowerCase();
//     let indeX = alphabeth.indexOf(chaRat) + 1;
//     if (indeX > 0) {
//       result += indeX.toString();
//     } else {
//       result += chaRat;
//     }
//   }
//   return result;
// };
// const inputText = "This is codelab";
// const convertText = test(inputText);
// console.log(convertText);
// console.clear();

// const pair = (arr: number[], numb: number): boolean => {
//   if (arr.length % 2 !== 0) {
//     return false;
//   } else {
//     let startPoint = 0;
//     let endPoint: number = 0;
//     let store: any = [];
//     while (endPoint < arr.length) {
//       startPoint = endPoint;
//       endPoint += 2;
//       store.push(arr.slice(startPoint, endPoint));
//       console.log(store);

// console.log(endPoint);
//     }
//     for (let i of store) {
//       if (i.reduce((a: number, b: number) => a + b) !== numb) return false;
//     }
//   }

//   return true;
// };
// console.log(pair([1, 3, 2, 2, 3, 5], 4));

// const sumCount = (a: number): number => {
//   let result: number = 0;
//   for (let i = 0; i <= a; i++) {
//     result = result + i;
// console.log("this is I:", i);

// console.log("this is result:", result);
//   }
//   return result;
// };
// time("sumCount");
// console.log(sumCount(10000000000));
// timeEnd("sumCount");

// const sumUp2 = (numb: number): number => {
//   return (numb * (numb + 1)) / 2;
// };
// console.log(sumUp2(500));

// const sumUp = (numb: number): number => {
//   let result: number[] = [];
//   for (let i = 0; i < numb; i++) {
//     result.push(i);
//   }

//   return result.reduce((a: number, b: number) => a + b);
// };

// console.log(sumUp(6));

// class PointOne {
//   x: number;
//   y: number;
//   z: number;

//   constructor(x: number, y: number, z: number) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
//   static distance(A: PointOne, B: PointOne, C: PointOne) {
//     let dx = B.x - A.x - C.x;
//     let dy = B.y - A.y - C.y;
//     let dz = B.z - A.z - C.z;

//     return parseFloat(
//       Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2) + Math.pow(dz, 2)).toFixed(2)
//     );
//   }
// }
// const PointA = new PointOne(4, 3, 5);
// const PointB = new PointOne(1, 4, 3);
// const PointC = new PointOne(8, 4, 4);

// console.log(PointOne.distance(PointA, PointB, PointC));

// const oN1 = (a: number): void => {
//   for (let i = 0; i <= Math.max(10, a); i++) {
//     console.log(i);
//   }
// };

// const oN2 = (a: number): void => {
//   for (let i = 0; i <= Math.min(10, a); i++) {
//     console.log(i);
//   }
// };
// time("start oN1");
// oN1(1000
//   );
// timeEnd("start oN1");
// time("start oN2");
// oN2(5);
// timeEnd("start oN2");

// const check = (str: string) => {
//   if (str.includes("xo")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(check("XO".toLowerCase()));
