// // promise

import { includes } from "lodash";

// import { first, times } from "lodash";

// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("sucess");
//   } else {
//     reject("failed");
//   }
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err))
//   .finally(() => {
//     console.log("clean up");
//   });

// const makeAPIcalls = (time: number) => {
//   return setTimeout(() => {
//     console.log(`reah Db in ${time / 1000} sec`);
//   }, time);
// };

// // const finalCall = Promise.all([makeAPIcalls(1000)]);

// const authFunction = () => {
//   let email: string = "peter@test.com";
//   let password: string = "peter@test.com";

//   return new Promise((resolve, reject) => {
//     if (email === "peter@test.com") {
//       if (password === "peter@test.com") {
//         const data = {
//           message: "success",
//           status: 201,
//           data: {
//             email,
//             name:
//               email.split("@")[0].charAt(0).toUpperCase() +
//               email.split("@")[0].slice(1),
//           },
//         };
//         resolve(data);
//       } else {
//         reject("password incorrect");
//       }
//     } else {
//       reject("email is incorrect");
//     }
//   });
// };

// const landingPage = (auth: any): void => {
//   console.log(`welcome to the landing page ${auth.data.name}`);
// };

// authFunction()
//   .then((res: any) => {
//     console.log("Processing request......");
//     setTimeout(() => {
//       landingPage(res);
//     }, 4000);
//   })
//   .catch((err) => console.error(err));

// const testAsync = async () => {
//   try {
//     const res = await authFunction();
//     console.log("process login...");
//     setTimeout(() => {
//       landingPage(res);
//     }, 4000);
//   } catch (error) {
//     console.error(error);
//   }
// };

// testAsync();

// const time = setTimeout(() => {
//   console.log("first");

//   clearTimeout(time)
// }, 1000);

// let name: string = "Rasheedat"

// const reve = (a: string): string => {
//   let result: string = "";
//   let chnage: string[] = a.split("");
//   let rev = chnage.reverse();

//   return rev.join("");
// };
// console.log(reve("peter"));

// const rev = (str: string): string => {
//   let result1: string = "";

//   for (let i = 0; i < str.length; i++) {
//     result1 = str[i] + result1;
//   }
//   return result1;
// };
// console.log(rev("Peter"));

// const rev = (str: string): string => {
//   let result1: string = "";

//   for (let i of str) {
//     result1 = i + result1;
//   }
//   return result1;
// };
// console.log(rev("Peter"));

// const rev = (str: string): string => {
//   let result1: string = "";

//   for (let i of str) {
//     result1 = i + result1;
//   }
//   if (result1.toLowerCase() === str.toLowerCase()) {
//     return "true";
//   } else {
//     return "false";
//   }
// };
// console.log(rev("Peter"));

// const rev = (str: number) => {
//   let result1: string = "";

//   for (let i of str.toString()) {
//     result1 = i + result1;
//   }
//   return Math.sign(str) * parseInt(result1);
// };
// console.log(rev(-75));

//Tenary operator
//{boolean ?: ?:}

// const hundred = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       console.log("fuzzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("fuzz");
//     } else if (i % 3 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// for (let index = 0; index < 20; index++) {
//   console.log(index);
// }

// const ana = (strOne: string, strTwo: string) => {
//   if (strOne.includes(strTwo)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(ana("anagram", "ram"));

const countCheck = (str: string) => {
  let obj: any = {};
  let maxChar: string = "";
  let maxNumb: any = 0;

  for (let i of str) {
    if (obj[i]) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }

  for (let i of str) {
    obj[i] = ++obj[i] || 2;
  }

  for (let [value, key] of Object.entries(obj)) {
    let values: any = key;
    let keys: any = value;
    if (keys > maxNumb) {
      maxNumb = keys;
      maxChar = values;
    }
  }
  return `The hihgest frequency is ${maxChar}, it has ${maxNumb} occurence`;
};
console.log(countCheck("peterjamesewkjwewmmn"));

const characterAna = (str: string): any => {
  let obj: any = {};
  let main: string = str.toLowerCase().replace(/[\W]/g, "");
  for (let i of main) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
};

const anagramTest = (strA: string, strB: string): boolean => {
  let CharA: any = characterAna(strA);
  let CharB: any = characterAna(strB);

  if (Object.keys(CharA).length !== Object.keys(CharB).length) return false;

  for (let i in CharA) {
    if (CharA[i] !== CharB[i]) return false;
  }

  return true;
};

console.log(characterAna("Peter pan!@*"));
console.log(anagramTest("Silent", "Listen"));
console.log(anagramTest("RAIL! SAFETY!", "fairy tales"));
console.log(anagramTest("in There", "by There"));

const capitalText = (strt: string): string => {
  let result2: string[] = [];
  let words: string[] = strt.split(" ");
  for (let i of words) {
    result2.push(i[0].toUpperCase().concat(i.slice(1)));
  }
  return result2.join(" ");
};
console.log(capitalText("this is the best day ever"));

//Data structure: data exist in different form and shape. we also have a scale call "big O notation", for you to know about data structure and algorithm you must know "big O". it helps us predict if our code will crash or work at a huge scale. time and space are what to take not of while working wih data structure
