import path from "node:path";
import fs from "node:fs";
import { EventEmitter } from "node:stream";

let pathFile = path.join(__dirname, "event");
let pathFileEntry = path.join(__dirname, "event", "studentEvent.json");
let pathFileNotice = path.join(__dirname, "event", "studentNotice.json");

class MyEvent extends EventEmitter {
  displayName = (name: string) => {
    console.log("reading Name:", name);
    this.emit("name", `my name is ${name}`);
  };

  createStudent(name: string, score: number) {
    let student = {
      name,
      score,
    };
    if (!fs.existsSync(pathFile)) {
      fs.mkdirSync(pathFile);
      fs.writeFile(pathFileEntry, JSON.stringify([student]), () => {
        console.log("student enter");
      });
    } else {
      fs.readFile(pathFileEntry, (err: any, res: any) => {
        if (err) console.error();
        let readData = JSON.parse(res);
        readData.push(student);
        fs.writeFile(pathFileEntry, JSON.stringify(readData), () => {
          console.log("student Entered");
        });
      });
    }
  }

  updateScore(name: string, score: number) {
    fs.readFile(pathFileEntry, (err: any, res: any) => {
      if (err) console.error();

      let readData = JSON.parse(res);
      let updated = readData.find((el: any) => {
        return el.name === name;
      });

      updated.score = score;

      this.emit("changeScore", updated);

      fs.writeFile(pathFileEntry, JSON.stringify(readData), () => {
        console.log("Student score updated");
      });
    });
  }
}

// updateScore(name:string, score: number) {
//     fs.readFileSync(pathFileEntry, (err:any, res:any)=>{
//         if(err) console.error();

// let readData = JSON.parse(res)
// let updated = readData.find((el:any)=>{
//     return el.name === name
// })
//    updated.score = score

//    this.emit("changeScore", updated)
//    fs.writeFile(pathFileEntry, JSON.stringify(readData),()=>{
//     console.log("student score updated");
//    })
//     })
// }
// }
export default MyEvent;
