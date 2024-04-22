// import moment from "moment";
// import { compose, pipe } from "lodash/fp";
// import { curry, set } from "lodash";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { StringIterator, parseInt, values } from "lodash";
import { log } from "console";

// //data types
// // primitive: string, number, boolean
// // let x: string = "name";
// // let num: number = 4;
// // let x1: string = num.toString();

// let x: string = "brighterdayscodelab@gmail.com";
// let a: number = x.length;
// let cut = x.substring(0, 4);

// //James way
// // let mid: string = x.substring(cut.length, y);
// // let star: string = "*".repeat(mid.length);
// // let conct: string = cut.concat(star, z);
// // console.log(conct);

// //Mr.peter way
// // let bring: string = cut.concat(z);
// // let twoNumbers: number = bring.length;

// // let difflength: number = a - twoNumbers;
// // let star: string = "*".repeat(difflength);

// // let conca: string = cut.concat(star, z);
// // console.log(conca);

// // let numbers = (numbers: number) => {
// //     for (let numbers = 6; numbers <= 12; ++);
// // Math.floor();
// //   console.log(x);
// // };

// // let res = (a:number, b:number): number=>{
// //     return Math.floor(Math.random(a - b +1)+b)
// // }

// // let first = (arr: number[]): number => {
// //   return Math.floor(Math.max(...arr));
// // };
// // console.log(first([12, 78, 34, 17]));

// // let arr: number[] = [12, 34, 67, 35, 109, 678, 32];

// // let func = (arr: number[]): number => {
// //   return arr.sort((a: number, b: number) => {
// //     return a - b;
// //   })[arr.length - 1];
// // };

// // console.log(func(arr));

// // const addValue = (a: number, b: number = 10): number => {
// //   return a + b;
// // };
// // console.log(addValue(8));

// // let str2: string = "sonia";
// // let str = (str2: string, val: number = 0): string => {
// //   if (val > str2.length) {
// //     return "This is below";
// //   } else return str2.charAt(val);
// // };

// // console.log(str(str2, 9));

// // let setSonia: string[] = ["This is James", "sonia", "muhammed"];
// // let str1 = (setSonia: string[]): string[] => {
// //   return setSonia.slice(2);
// // };

// // console.log(str1(setSonia));

// // let data: (number | string)[] = [1, 2, 3, 4, 5];
// // data.push(9, "r");
// // console.log(data);

// interface defined {
//   item: string;
//   price: number;
//   quantity: number;
// }

// // type defined1 = {
// //   name: string;
// //   score: number;
// //   age: number;
// // };

// // let res = (a: number, b: number): number => {
// //   return Math.floor(Math.random() * (a - b + 1) + b);
// // };

// // let add3 = (): defined[] => {
// //   return Array.from({ length: res(10, 15) }, () => {
// //     let age: number = res(25, 17);
// //     let score: number = res(100, 200);
// //     let names: string[] = [
// //       "Sonia",
// //       "james",
// //       "muhammed",
// //       "terry",
// //       "fedora",
// //       "caleb",
// //       "dotun",
// //       "david",
// //       "chinedu",
// //       "kelechi",
// //       "praise",
// //       "somto",
// //       "kizito",
// //       "vittorino",
// //     ];
// //     return {
// //       name: names[Math.floor(Math.random() * names.length)],
// //       score: score,
// //       age: age,
// //     };
// //   });
// // };

// // console.log(add3());

// // let tryData: defined[] = [
// //   { name: "sonia", age: 30, score: 123 },
// //   { name: "James", age: 34, score: 23 },
// //   { name: "Fedora", age: 12, score: 53 },
// // ];

// // console.log(
// //   tryData.filter((el) => {

// //   })
// // );

// // (P X R X T)/100

// // NUMBER ONE

// // let endPoint: number = 1000;
// // let rate: number = 22;
// // let year: number = 3;

// // const one = (endPoint: number, rate: number, year: number) => {
// //   let final: number = ((endPoint / ratejjklk'k
// //   ) * year) / 100;
// //   return Math.floor(final);
// // };

// // console.log(one(endPoint, rate, year));

// //NUMBER ONE SECTION 2

// // let intialAmount: number = 2000;
// // let endAmount: number = 300000;

// // const time = (intialAmount: number, endAmount: number): number => {
// //   return endAmount / intialAmount;
// // };
// // console.log(time(intialAmount, endAmount));

// //NUMBER TWO

// interface defined {
//   item: string;
//   price: number;
//   quantity: number;
// }

// // let www = (a: number, b: number): number => {
// //   return Math.floor(Math.random() * (a - b + 1) + b);
// // };

// // let product = () => {
// //   return Array.from({ length: www(7, 4) }, () => {
// //     let quantity: number = www(9, 5);
// //     let price: number = www(12000, 3000);
// //     let names: string[] = ["plasma", "fridge", "laptop"];
// //     let hquantity: number = Math.max(quantity);

// //     return {
// //       item: names[Math.floor(Math.random() * names.length)],
// //       price: price,
// //       quantity: quantity,
// //     };
// //   });
// // };

// // const myCart = product();

// // let highest = Math.max(
// //   ...myCart.map((el) => {
// //     return el.quantity;
// //   })
// // );
// // console.log(
// //   "cart: ",
// //   myCart.map((el) => {
// //     return el.quantity;
// //   })
// // );

// // console.log(
// //   "highest: ",
// //   Math.max(
// //     ...myCart.map((el) => {
// //       return el.quantity;
// //     })
// //   )
// // );

// // let usingFindMethod = myCart.find((el) => {
// //   return el.quantity === highest;
// // });

// // let usingFilterMethod = myCart.filter((el) => {
// //   return el.quantity === highest;
// // });

// // console.log("usingFindMethod: ", usingFindMethod);
// // console.log("");
// // console.log("usingFilterMethod: ", usingFilterMethod);

// // let testArr = ["a", "b", "c", "d"].reduce((a, b) => {
// //   return a + b;
// // });

// // console.log(
// //   myCart
// //     .map((el: any) => {
// //       return el.quantity;
// //     })
// //     .reduce((a: number, b: number) => {
// //       return a + b;
// //     })
// // );

// // console.log(
// //   myCart
// //     .map((el: any) => {
// //       return el.price;
// //     })
// //     .reduce((a: number, b: number) => {
// //       return a + b;
// //     })
// // );

// // console.log(
// //   `₦${myCart
// //     .map((el: any) => {
// //       return el.price * el.quantity;
// //     })
// //     .reduce((a: number, b: number) => {
// //       return a + b;
// //     })
// //     .toLocaleString()}`
// // );

// // console.log(
// //   "showing price:",
// //   myCart
// //     .map((el: any) => {
// //       if (el.quantity >= 7) {
// //         let percentagePrice = (el.price * el.quantity * 11) / 100;
// //         return {
// //           ...el,
// //           newPrice: percentagePrice,
// //         };
// //       } else {
// //         return {
// //           ...el,
// //           newPrice: el.price * el.quantity,
// //         };
// //       }
// //     })
// //     .map((el) => {
// //       return el.newPrice;
// //     })
// //     .reduce((a: number, b: number) => {
// //       if (a + b >= 150000) {
// //         let result = a + b;
// //         console.log("real price", result);
// //         return result - result * 0.2;
// //       } else {
// //         return a + b;
// //       }
// //     })
// // );

// // const obj: any = {
// //   name: "peter",
// //   classes: "set 09",
// // };

// // to add to the objct if you don not describe  make use of the ANY to  work on typescript

// // console.log(greetings());

// () => {};

// let time = moment(Date.now()).hour();
// console.log(time);

// // function greeting(name: string) {
// //   if (time >= 0 && time <= 12) {
// //     return `Good morning ${name}`;
// //   } else if (time >= 13 && time <= 18) {
// //     return `Good afternoon ${name}`;
// //   } else if (time >= 17 && time <= 24) {
// //     return `Good evening ${name}`;
// //   } else {
// //     return "sorry time invalid";
// //   }
// // }
// // console.log(greeting("james"));
// // let input: string = "  CodeLab students  ";
// // let trimInput: string = input.trim();
// // let trimInputLower: string = trimInput.toLocaleLowerCase();

// // let trimInputFn = (str: string): string => {
// //   return str.trim();
// // };
// // let trimInputLowerFn = (str: string): string => {
// //   return str.toLowerCase();
// // };
// // let wrapFn = (str: string): string => {
// //   return str.trim();
// // };
// // console.log(`<div>${trimInputLower}<div>`);

// // let str = "This is CodeLab, year 2023, 2024";
// // let str2 = "set 09";

// // let frstMethod = str.charAt(2);
// // let secondMethod = str.concat(str2);
// // let thirdMethod = str.endsWith("b");
// // let fourtMethod = str.includes("i");
// // let fifthMethod = str.indexOf("i", 0);
// // let sixthMethod = str.lastIndexOf("i", 1); // adding 1 to it will result to minus 1 since we are searching for the last occurence which takes in two  parameter, the search string and the place to start counting from so by pi=utting a number from 1 or 2 will resturn to minus of that index because we are searching for lastindex and not the first.
// // let seventhMethod = str.length;
// // let eigthMethod = str.slice(3, 6); // the second parameter in SLICE are always exclusive which means they are always excluded just like i place (3,6) instead of counting 6 with it, six will be excluded and only 5 will be counted just like this 3, 4, 5 finish.
// // let ninthMethod = str.split(" ");
// // console.log(ninthMethod);

// const map = (a: number[]) => {
//   return a;
// };
// const otherMap = (fn: number[]) => {
//   return fn;
// };
// console.log(otherMap(map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])));

// // first test
// // const test = (a: number, b: number) => {
// //   return a + b;
// // };

// // console.log(test(9, 5));

// // second test
// // const test = (a: string) => {
// //   return a.length;
// // };
// // console.log(test("This is code lab institue"));

// // third test

// // console.log(rando(4, 20));

// // const test = () => {
// //   let vri: number = rando(1, 20);
// //   if (vri % 2 === 0) {
// //     return `Number ${vri} is an even number`;
// //   } else {
// //     return `"Number ${vri} is an odd number"`;
// //   }
// // };
// // console.log(test());

// // fourth test
// // const test = (): number[] => {
// //   return [1, 2, 3, 4, 5, 6];
// // };

// // console.log(
// //   test().reduce((a, b) => {
// //     return a + b;
// //   })
// // );

// // const test = (a: string) => {
// //   return a;
// // };
// // console.log(test("This is a string").split(" ").reverse().join(" "));

// // const test: any = (a: string[], b: string[]) => {

// //   if (a <= b) {
// //     return a;
// //   } else {
// //     return b;
// //   }
// // };

// // console.log(test(["This"], ["is"]));

// // const test = (a: number[]) => {
// //   return Math.max(1, 2, 3, 4, 6, 12, 56, 34);
// // };
// // console.log(test([]));
// // const rando = (a: number, b: number) => {
// //   return Math.floor(Math.random() * (a - b + 1) + b);
// // };

// // const test = (a: number, b: number) => {
// //   return rando(a, b);
// // };
// // console.log(test(12, 30));

// //OOP: OBEJECT ORIENTED PROGRAMMING

// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   studentName() {
//     return `${this.name}, ${this.age}`;
//   }
//   set changeName(value: string) {
//     this.name;
//   }
//   get getName() {
//     return this.age;
//   }
// }
// let user = new User("Toyota", 23);
// let student = new User("Terry", 56);
// // console.log((student.changeName = "James"));
// console.log(student.getName);
// // console.log(student.age);

// class Mat {
//   a: number;
//   b: number;
//   constructor(a: number, b: number) {
//     this.a = a;
//     this.b = b;
//   }
//   mult() {
//     return this.a * this.b;
//   }
//   add() {
//     return this.a + this.b;
//   }
//   division() {
//     return this.a / this.b;
//   }
//   subtract() {
//     return this.a - this.b;
//   }

//   accessMat() {
//     if (this.division() >= 10) {
//       return "awesome";
//     } else if (this.mult() >= 10) {
//       return "you tried";
//     } else if (this.add() >= 10) {
//       return "you tried";
//     } else if (this.subtract() >= 10) {
//       return "you tried";
//     } else {
//       return "too bad";
//     }
//   }

//   compare() {
//     if (this.add() >= 10) {
//       return "I am the one: add ";
//     } else if (this.subtract() >= 10) {
//       return "I am the one: subtract";
//     } else if (this.mult() >= 10) {
//       return "I am the one: mult";
//     } else if (this.division() >= 10) {
//       return "I am the one: division";
//     } else {
//       return "no match";
//     }
//   }
// }

// let newMul = new Mat(4, 2);
// console.log(newMul.add());
// console.log(newMul.mult());
// console.log(newMul.division());
// console.log(newMul.subtract());

// console.log(newMul.accessMat());
// console.log(newMul.compare());

// let ff = (a: string): any => {
//   return `hello ${a}`;
// };
// let fn = (a: () => {}) => {
//   return a;
// };
// console.log(fn(ff("james")));
// console.clear();

// class Setnine {
//   item: string;
//   school: string;
//   constructor(item: string, school: string) {
//     this.item = item;
//     this.school = school;
//   }

//   sch(a: number) {
//     return this.school[a];
//   }
// }

// let newSetnine = new Setnine("Codelab", "Institute");
// console.log(newSetnine.sch(5));

// console.clear();

// class Rectangle {
//   width: number;
//   length: number;

//   constructor(width: number, length: number) {
//     this.length = length;
//     this.width = width;
//   }

//   area() {
//     return this.width * this.length;
//   }

//   perimeter() {
//     return 2 * (this.width + this.length);
//   }
// }

// let newRectangle = new Rectangle(20, 20);
// console.log(newRectangle.area());
// console.log(newRectangle.perimeter());

// console.clear();

// class University {
//   uniName: string;
//   uniDeps: any[];

//   constructor(name: string, department: string[]) {
//     this.uniName = name;
//     this.uniDeps = department;
//   }

//   addDept(deptName: string, num: number) {
//     return this.uniDeps.push(
//       num,
//       deptName.charAt(0).toUpperCase() + deptName.slice(1).toLowerCase()
//     );
//   }

//   deleteDept(deleteName: string) {
//     let index = this.uniDeps.indexOf(deleteName);
//     return this.uniDeps.splice(index, 1);
//   }
// }

// let newUni = new University("Uni Lag", ["Medicine", "Fishery", "Masscom"]);
// newUni.addDept("chemistry", 1);
// newUni.addDept("farming", 2);
// newUni.addDept("codeLab", 3);
// console.log(newUni);

// console.clear();

// class Employee {
//   name: string;
//   salary: number;

//   constructor(name: string, salary: number) {
//     this.name = name;
//     this.salary = salary;
//   }

//   annualSalary() {
//     return this.salary * 12;
//   }
// }

// class Manager extends Employee {
//   department: string;

//   constructor(department: string, name: string, salary: number) {
//     super(name, salary);
//     this.department = department;
//     this.name = name;
//     this.salary = salary;
//   }
//   annualmSalary() {
//     return this.annualSalary() + this.annualSalary() * 0.1;
//   }
// }

// class Cleaner extends Employee {
//   department: string;

//   constructor(department: string, name: string, salary: number) {
//     super(name, salary);
//     this.department = department;
//     // this.name = name;
//     // this.salary = salary;
//   }
//   annualcSalary() {
//     return (this.annualSalary() + this.annualSalary() * 0.1) / 2;
//   }
// }

// let proMan = new Manager("Human Resources", "James", 2000);
// let proEmplo = new Employee("James", 2000);
// let proCleaner = new Cleaner("Human Resources", "James", 2000);
// console.log(proEmplo.annualSalary());
// console.log(proMan.annualmSalary());
// console.log(proCleaner.annualcSalary());

// console.clear();

// const test = () => {
//   let fir = 12;
//   let seco = 3;
//   return fir * seco;
// };
// console.log(test());

// let fir1: number = 4;
// let seco2: number = 3;
// const test2 = () => {
//   return fir1 + seco2;
// };
// console.log(test2());

// const test3 = (fir: number, seco: number) => {
//   return fir * seco;
// };
// console.log(test3(2, 3));

// let fir1dy: number = 4;
// let secodyn: number = 3;
// const test4 = (fir1dy: number, secodyn: number) => {
//   return fir1 + seco2;
// };
// console.log(test4(1, 2));

// console.clear();

// class Greetings {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greeting() {
//     return `Hello my name is ${this.name} and I'm ${this.age} age, a student of CodeLab Institute`;
//   }
// }
// let newGreetings = new Greetings("James", 20);
// console.log(newGreetings.greeting());
// console.clear();

// const func = (a: string, b: number, c: string) => {
//   return `Good day everyone I'm ${a} a student of  Codelab ${c} and I'm ${b} years old`;
// };
// console.log(func("Rasheedat", 23, "Institute"));
// console.clear();

// class Book {
//   title: string;
//   author: string;

//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//   }

//   bookDetails() {
//     return `This is a book written by author ${this.author} with the title "${this.title}"`;
//   }
// }

// class Ebook extends Book {
//   price: number;

//   constructor(title: string, author: string, price: number) {
//     super(title, author);
//     this.price = price;
//   }
//   bookDetails() {
//     return `This is a book written by author ${this.author} with the title "${this.title}" and it costs ${this.price}`;
//   }
// }

// let insBook = new Book("Steal Like An Artist", "Rasheedat");
// let insEbook = new Ebook("Steal Like An Artist", "Rasheedat", 12000);
// console.log(insBook);
// console.log(insEbook);
// console.log(insBook.bookDetails());
// console.log(insEbook.bookDetails());
// console.clear();

// // let arr: number[] = [1, 2];

// // function allArr() {
// //   return arr.map((el) => {
// //     el * 2;
// //   });
// // }

// // console.log(allArr());

// class MultArr {
//   private numbers: number[];
//   constructor(numbers: number[]) {
//     this.numbers = numbers;
//   }
//   calc() {
//     return this.numbers.map((el) => {
//       return el * 2;
//     });
//   }
//   cala(addnum: number) {
//     if (this.numbers.includes(addnum)) {
//       return `Yes ${addnum} exists in the array`;
//     } else {
//       return `No ${addnum} doesn't exist in the array`;
//     }
//   }
//   // calas(addnum: number) {
//   //  if(this.numbers.some(addnum)=>){
//   //   return `${addnum} is in array`
//   //  }else{
//   //   return
//   //  }
//   // }
// }
// let ar = new MultArr([1, 2, 3, 4, 5]);
// console.log(ar.calc());
// // console.log(ar.calas(2));

// class Cook {
//   private name: string;
//   private author: string;
//   constructor(name: string, author: string) {
//     this.author = author;
//     this.name = name;
//   }

//   //   set changename:{
//   //   readonly:name:string
//   //   }
// }
// let newBook = new Cook("marvei", "marvel");
// // console.log(newBook);

// const funct = (a: number[]) => {
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//   }
// };

// const funct2 = (a: number) => {
//   for (let i = 1; i <= a; i++) {
//     console.log(i);
//   }
// };

// funct([1, 2, 3, 6, 5]);
// funct2(4);

// class Terry {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {}
// }

// class Mike extends Terry {
//   grade: string;
//   school: string;
//   constructor(grade: string, school: string, name: string, age: number) {
//     super(name, age);
//     this.grade = grade;
//     this.school = school;
//   }

//   introduce() {
//     return `Hello my name is ${this.name} and i'm ${this.age} years old a grade ${this.grade}, and i'm a student of ${this.school}`;
//   }
// }

// const mike = new Mike("set09", "codelab", "terry50", 17);
// console.clear();

// // const functs = (a: string) => {
// //   return a;
// // };
// // console.log(mike.introduce());

// const prompt = PromptSync();
// // let name: string = prompt("What is your Name:");

// // console.log(`Hello ${name}... Good to have you today`);

// // let c = prompt("pass in  your first number");
// // let b = prompt("pass in  your second number");
// // const addUp = (c: number, b: number) => {
// //   return c + b;
// // };
// // console.log(addUp(parseInt(c), parseInt(b)));

// // const even = (input: number, divisor: number) => {
// //   for (let index = 0; index <= input; index++) {
// //     if (index % divisor === 0) {
// //       console.log(index);
// //     }
// //   }
// // };
// // let c = prompt("pass in  your printed value");
// // let b = prompt("pass in  your divisor");
// // console.clear();

// // for (let i = 0; i < 4; i++) {
// //   for (let j = 0; j < 4; j++) {
// //     if (i === 2 && j === 1) {
// //       console.log("I am equal");
// //       break;
// //     } else {
// //       console.log(i, j);
// //     }
// //   }
// //   break;
// // }

// // for (let i = 1; i <= 100; i++) {
// //   if (i === 7) {
// //     console.log("I'm skipped");
// //     break;
// //   } else {
// //     console.log(i);
// //   }
// // }

// // let guessNumber: number = 0;
// // let luckyNumber: number = 5;

// // let g: number = 0;
// // while (luckyNumber !== guessNumber) {
// //   if ((guessNumber = parseInt(prompt("What is your guess number")))) {
// //     console.log("Excellent");
// //   } else {
// //     console.log("oops you're wrong");
// //   }
// // }

// // let ball: string[] = ["blue", "red", "green"];
// // let choice = Math.floor(Math.random() * (2 - 0 + 1) + 0);

// // console.log("reading", ball[choice]);
// // let myChoice: string = prompt("This is my choice:");

// // while (ball[choice] !== myChoice) {
// //   let comp = ball[choice];
// //   console.log("comp choice", comp);
// //   myChoice = prompt("this is my choice:");
// // }
// // if (ball[choice] === myChoice) {
// //   console.log("correct");
// // } else {
// //   console.log("wrong");
// // }

// // const rando = (a: number, b: number) => {
// //   return Math.floor(Math.random() * (a - b + 1) + b);
// // };

// // const fS = (m: string[]) => {
// //   return Array.from({ length: rando(4, 3) });
// // };
// // console.log(fS([]));

// class Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   sound() {
//     console.log("Print tribe");
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   sound() {
//     console.log(`Meow! Meow!`);
//   }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   sound() {
//     console.log(`Woof! Woof!`);
//   }
// }

// let doG = new Dog("Bingo");
// let caT = new Cat("Kitten");

// const getSound = (animal: Animal) => {
//   return animal.sound();
// };
// getSound(doG);
// getSound(caT);

// class Car {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
//   gasSpeed() {
//     console.log("speed");
//   }
// }

// class Volvo extends Car {
//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }
//   gasSpeed() {
//     console.log("100m/s");
//   }
// }

// class Benz extends Car {
//   constructor(name: string) {
//     super(name);
//     this.name = name;
//   }
//   gasSpeed() {
//     console.log(`the speed of ${this.name} is 200m/s`);
//   }
// }
// let benz = new Benz("Benz");
// let volvo = new Volvo("Volvo");
// const getCarSpeed = (car: Car) => {
//   return car.gasSpeed();
// };
// getCarSpeed(benz);
// getCarSpeed(volvo);

// console.clear();

// class PointOne {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   static distance(A: PointOne, B: PointOne) {
//     let dx = B.x - A.x
//     let dy = B.y - A.y;
//     return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)).toFixed(2)
//   }
// }
// const PointA = new PointOne(4,3);
// const PointB = new PointOne(4, 3);

// console.log(PointOne.distance(PointA, PointB));

// let func = (a: number, b: number = 0) => {
//   if (b >= a.toString().length) {
//     return `It's too big`;
//   } else {
//     return a.toString().charAt(b);
//   }
// };
// let qu = parseInt(prompt("What is the number: "));
// console.log(func(qu, 7));

// class house {
//   private name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   set changeNmae(value: string) {
//     this.name = value;
//   }
// }

// let inHouse = new house("Codelab");
// let funcs = (a: house) => {
//   return a.name;
// };
// let infuncs = new house("Ajegunle");
// console.log(funcs(infuncs));

// const myFun = (a: string) => {
//   return a;
// };

// console.log(myFun("i love coding"));

// const func2 = () => {
//   return "okay";
// };
// export let mod = () => {
//   return `hey`;
// };

// console.log();

// const pur = (a: string) => {
//   return a;
// };
// const fns = (b: string) => {
//   return b;
// };
// console.log(pur("art"));
// console.log(pur("tea"));
// let bl = () => {
//   setTimeout(() => {
//     console.log("getting");
//   }, 2000);
// };
// console.log(bl());

// console.log("getting 1");
// console.log("getting2");
// console.log("getting");

// const again = (a: string) => {
//   return a;
// };
// const bb = (bc: string) => {
//   return bc;
// };
// const again1 = (bc: string) => {
//   return setTimeout(bc, 1000);
// };

// console.log("code1");
// console.log("code2");
// console.log(again1("terry"));
// console.log("code3");
// console.log("code4");

// // let name =(console.log(End);
// // )

// const bb = (bc: string)=>{
//   return bc
// }

// const unBl = (bc: string) => {
//   return setTimeout(() => {
//     return bc;
//   });
// };
// console.log("try 1");
// console.log("try 2");
// console.log("try 3");
// unBl("This is an unblocking code");
// console.log("try");

// class Test {
//   constructor(public name: string) {
//     this.name = name;
//   }
//   firstMethod(a: number) {
//     if (a === 0) {
//       return this.name.toLowerCase();
//     } else if (a > this.name.length) {
//       return this.name.toUpperCase();
//     }
//     if (true) {
//       return this.name.replace(
//         this.name.charAt(a - 1),
//         this.name.charAt(a - 1).toUpperCase()
//       );
//     }
//   }
// }

// let inTest = new Test("jamEs");
// console.log(inTest.firstMethod(2));
