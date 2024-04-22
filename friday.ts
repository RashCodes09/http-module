import { result } from "lodash";
import moment from "moment";
import fs from "node:fs";
import path from "node:path";
import { EventEmitter } from "node:events";

// import { v4 as uuidv4 } from "uuid";

let entry = path.join(__dirname, "student", "studentEntry.json");
let dir = path.join(__dirname, "student");

let updatedName: string = "";
let updatedId: string = "";
let updatedScore: number = 0;

const studentCreation = (name: string, score: number) => {
  let res = (a: number, b: number): number => {
    return Math.floor(Math.random() * (a - b + 1) + b);
  };

  let student = {
    id: res,
    name,
    score,
    time: moment(Date.now()).format("llll"),
  };

  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, () => {
      console.log("folder created");
    });

    let arr: {}[] = [];
    arr.push(student);

    fs.writeFile(entry, JSON.stringify(arr), () => {
      console.log("done writing");
    });
  } else {
    fs.readFile(entry, (err: any, res: any) => {
      if (err) throw err;

      let data = JSON.parse(res);
      if (updatedId !== "" && updatedScore !== 0) {
        let updateEntry = data.find((el: any) => {
          return el.id === updatedId;
        });
        updateEntry.score = updatedScore;
        let fetchout = data.filter((el: any) => {
          return el.id !== updatedName;
        });
        fetchout.push(updateEntry);
        fs.writeFile(entry, JSON.stringify(fetchout), () => {
          console.log("file updated");
        });
      } else {
        let checked = data.some((el: any) => {
          return el.name === student.name;
        });
        if (checked) {
          console.log(`${student.name} already exist`);
        } else {
          data.push(student);
          fs.writeFile(entry, JSON.stringify(data), () => {
            console.log("file written");
          });
        }
      }
    });
  }
};

const addSchool = () => {
  fs.readFile(entry, (err: any, res: any) => {
    if (err) throw err;
    let myData = JSON.parse(res);
    const read = myData.map((el: any) => {
      return { ...el, school: "CodeLab" };
    });
  });
};

addSchool();
studentCreation("Habib", 50);

// let storeEntry = path.join(__dirname, "store", "storeEntry.json");
// let storeDIR = path.join(__dirname, "store");

// let resultData: any = {
//   businessName: "",
//   dataRecorded: "",
//   CE0: "",
//   address: "",
//   contact: "",
//   email: "",
//   facebook: "",
//   data: [],
// };

// const createItems = (name: string, categories: string, quantity: number) => {
//   let res = (a: number, b: number): number => {
//     return Math.floor(Math.random() * (a - b + 1) + b);
//   };
//   let items = {
//     id: res,
//     name,
//     quantity,
//     time: moment(Date.now()).format("llll"),
//     categories,
//   };

//   if (!fs.existsSync(storeDIR)) {
//     fs.mkdirSync(storeDIR);
//     resultData.data.push(items);
//     fs.writeFile(storeEntry, JSON.stringify(resultData), () => {
//       console.log("file created");
//     });
//   } else {
//     fs.readFile(storeEntry, (err: any, res: any) => {
//       if (err) throw err;
//       let store = JSON.parse(res);
//       store.data.push(items);
//       console.log(store);
//       fs.writeFile(storeEntry, JSON.stringify(store), () => {
//         console.log("file created again");
//       });
//     });
//   }
// };
// createItems("sweet", "candies", 4);

// const addItems = (name: string, quantity: number) => {
//   fs.readFile(storeEntry, (err: any, res: any) => {
//     if (err) throw err;
//     let data = JSON.parse(res);
//     let result = data.data.find((el: any) => {
//       return el.name === name;
//     });
//     result.quantity = result.quantity + quantity;

//     fs.writeFile(storeEntry, JSON.stringify(data), () => {
//       console.log(`${name} quantity has been added`);
//     });
//   });
// };

// addItems("sweet", 6);

// import MyEvent from "./event";

// const event = new EventEmitter();

// event.on("click", (...res) => {
//   console.log(res);
// });

// const item = {
//   name: "sweet",
//   qty: 88,
// };

// const item2 = {
//   name: "sweet",
//   qty: 88,
// };

// const item3 = {
//   name: "sweet",
//   qty: 88,
// };
// event.emit("click", item, item2, item3);

// let pathNotice = path.join(__dirname, "event", "studentNotice.json");
// const myEvent = new MyEvent();
// myEvent.on("name", (res: any) => {
//   console.log(res);
// });

// myEvent.on("changeScore", (res: any) => {
//   fs.writeFile(pathNotice, JSON.stringify(res), () => {
//     console.log("Notice sent");
//   });
// });
// myEvent.displayName("peter");
// myEvent.createStudent("Fedora", 54);
// myEvent.updateScore("Fedora", 69);
