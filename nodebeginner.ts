import path = require("node:path");

// PROCESS MODULE
process.on("beforeExit", () => {
  console.log("I am Ready");
});

process.on("uncaughtException", () => console.log("ruit this process"));

process.on("unhandledRejection", () => console.log(" this process"));

// OS MODULE
import os from "node:os";
console.log(os.platform());
console.log(os.release());
console.log(os.availableParallelism());

//Not working

let val = parseInt(os.cpus()[0].model.split("-")[0].split(" ")[1].split("")[1]);
if (val === 3) {
  console.log("this is a 3rd Gen pc");
} else if (val === 5) {
  console.log("this is the 5th Gen pc");
} else if (val === 7) {
  console.log("this is the 7th Gen pc");
} else if (val === 9) {
  console.log("this is the 9th Gen pc");
} else {
  console.log("Your genertion cannot be found");
}

console.log(os.hostname());
console.log(os.version());

let checkCpu = os.cpus().length;
let checki: any = os.cpus()[0].model.split("-")[0].split(" ")[2].split("")[1];
if (checkCpu < 4 && checki < 5) {
  console.log("YOUR PC can't run this");
} else {
  console.log("your PC run this game");
}

console.log(os.arch());
console.log(os.freemem());

// let myPath = "C:\\Users\\LENOVO\\Documents\\babystep\\nodebeginner.ts";
// let yourPath = path.join(__dirname, "utils.ts");
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(yourPath);
