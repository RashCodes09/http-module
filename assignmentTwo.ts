import { result } from "lodash";
import moment from "moment";
import fs from "node:fs";
import path from "node:path";
import { EventEmitter } from "node:events";

let storeEntry = path.join(__dirname, "store", "storeEntry.json");
let storeDIR = path.join(__dirname, "store");

let resultData: any = {
  businessName: "",
  dataRecorded: "",
  CE0: "",
  address: "",
  contact: "",
  email: "",
  facebook: "",
  data: [],
  notice: [],
};

const createItems = (name: string, categories: string, quantity: number) => {
  let res = (a: number, b: number): number => {
    return Math.floor(Math.random() * (a - b + 1) + b);
  };

  let items = {
    id: res,
    name,
    quantity,
    time: moment(Date.now()).format("llll"),
    categories,
  };

  if (!fs.existsSync(storeDIR)) {
    fs.mkdirSync(storeDIR);
    resultData.data.push(items);
    fs.writeFile(storeEntry, JSON.stringify(resultData), () => {
      console.log("file created");
    });
  } else {
    fs.readFile(storeEntry, (err: any, res: any) => {
      if (err) throw err;
      let store = JSON.parse(res);
      store.data.push(items);
      console.log(store);
      fs.writeFile(storeEntry, JSON.stringify(store), () => {
        console.log("file created again");
      });
    });
  }
};
createItems("malt", "drinks", 3);

// const addqty = (name: string, quantity: number) => {
//   fs.readFile(storeEntry, (err: any, res: any) => {
//     if (err) throw err;
//     let data = JSON.parse(res);
//     // console.log(data);

//     let result = data.data.find((el: any) => {
//       return el.name === name;
//     });
//     result.quantity = result.quantity + quantity;
//     console.log(result);

//     fs.writeFile(storeEntry, JSON.stringify(data), () => {
//       console.log(`${name} quantity has been added`);
//     });
//   });
// };

// addqty("fanta", 6);

const addItems = (name: string, quantity: number, categories: string) => {
  let res = (a: number, b: number): number => {
    return Math.floor(Math.random() * (a - b + 1) + b);
  };
  let items = {
    id: res,
    name,
    quantity,
    time: moment(Date.now()).format("llll"),
    categories,
  };
  fs.readFile(storeEntry, (err: any, res: any) => {
    if (err) console.log(err);
    let data = JSON.parse(res);
    // console.log(data);
    let final = data.data.push(items);
    console.log(final);
    fs.writeFile(storeEntry, JSON.stringify(data), () => {
      console.log("created");
    });
  });
};

addItems("mary-land", 30, "cookies");

const searchCat = (search: string) => {
  fs.readFile(storeEntry, (err: any, res: any) => {
    if (err) console.log(err);
    let read = JSON.parse(res);
    console.log(read);

    let resultSearch = read.flatMap((el: any) => {
      return el.data;
    });
    console.log(resultSearch);
    let final = resultSearch.filter((el: any) => {
      return el.categories === search;
    });
    console.log(final);
    fs.writeFile(storeEntry, JSON.stringify(read), () => {
      console.log("printed");
    });
  });
};
searchCat("cookies");

// const upda = (name: string) => {
//   fs.readFile(storeEntry, (err: any, res: any) => {
//     if (err) console.log(err);
//     let details = JSON.parse(res);
//   let result = details.
//   });
//   result.quantity = result.quantity + quantity;

//   fs.writeFile(storeEntry, JSON.stringify(data), () => {
//     console.log(`${name} quantity has been added`);
//   });

//     return update;
//   });
// };
// upda("Aminu Store");

// let change = update.toString().replace("", name);

// fs.readFile(storeEntry, (err: any, res: any) => {
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
