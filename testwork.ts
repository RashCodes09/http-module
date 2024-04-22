// import moment from "moment";
// import path from "node:path";
// import fs from "node:fs";
// class Test {
//   schoolName: string;
//   year: number;
//   set: string;
//   studentName: string;
//   age: number;
//   constructor(
//     schoolName: string,
//     year: number,
//     set: string,
//     studentName: string,
//     age: number
//   ) {
//     this.schoolName = schoolName;
//     this.year = year;
//     this.set = set;
//     this.studentName = studentName;
//     this.age = age;
//   }

//   createTest() {
//     let testStudent = path.join(__dirname, "tstudent", "student.json");
//     let foldStudent = path.join(__dirname, "tstudent");
//     if (!fs.existsSync(foldStudent)) {
//       fs.mkdirSync(foldStudent);

//       fs.writeFile(testStudent, JSON.stringify(Test), () => {
//         console.log("file created");
//       });

//       fs.readFile(testStudent, (err: any, res: any) => {
//         if (err) throw err;
//         let check = JSON.parse(res);
//         console.log("check");
//       });
//     } else {
//       fs.readFile(testStudent, (err: any, res: any) => {
//         if (err) throw err;
//         let check = JSON.parse(res);
//         console.log("check");
//       });
//       fs.writeFile(testStudent, JSON.stringify(Test), () => {
//         console.log("file created again");
//       });
//     }
//   }
// }
