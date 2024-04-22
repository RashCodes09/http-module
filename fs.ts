import { maxBy } from "lodash";
import moment = require("moment");
import { log } from "node:console";
import fs from "node:fs";
import fsPromise from "node:fs/promises";
import path = require("node:path");
// fs.readFile("./index.html", "utf-8", (err: any, data: string) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("this is a synchrono and will be sent to the heap stack", data);
//   }
// });

// const data = fs.readFileSync("./index.html", "utf-8");
// console.log("reading this will be taken the call stack", data);

// console.clear();

// let nums: number[] = [];
// for (let i = 0; i < nums.length; i++) {
//   nums.push(i);
// }
// console.clear();
// fs.writeFileSync;

// const patData = path.join(__dirname, "data", "firstCount.txt");

// const writeToFile = (numb: number) => {
//   console.time("started");

//   fs.open(patData, "w", (err: any, data: any) => {
//     if (err) {
//       throw err;
//     } else {
//       for (let i = 0; i <= numb; i++) {
//         fs.write(data, ` ${i} `, () => {});
//       }
//     }
//     console.timeEnd("started");
//   });
// };
// writeToFile(1000000);
// / Memory: 900MB
// CPU: 42%
//Time: 27.403s
// const writeFilepromise = async (numb: number) => {
//   console.time("started");
//   const promiseData = await fsPromise.open(patData, "w");

//   for (let i = 0; i <= numb; i++) {
//     await promiseData.write(` ${i} `);
//   }
//   console.timeEnd("started");
// };

// writeFilepromise(1000000);

// Memory:45MB
// CPU:31%
//Time: 2:52:299

interface iProps {
  id: number;
  name: string;
  registerTime: Date;
}
const student = {
  id: 1,
  name: "peter oti",
  registerTime: moment(),
};
const studentFile = path.join(__dirname, "schoolFile", "student.json");
// fs.writeFile(studentFile, JSON.stringify(student), () => {
//   console.log("done");
// });

fs.readFile(studentFile, (err: any, res: iProps | any) => {
  if (err) {
    return err;
  } else {
    let readBuff = JSON.parse(res);
    readBuff.push(student);

    fs.writeFile(studentFile, JSON.stringify(readBuff), () => {
      console.log(readBuff);
    });
  }
});
