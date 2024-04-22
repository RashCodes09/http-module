import { chunk } from "lodash";
import fs from "node:fs";
import path from "path";
import http, { IncomingMessage, ServerResponse } from "node:http";

// let path1 = path.join(__dirname, "testingFile", "data.txt");
// let path2 = path.join(__dirname, "testingFile", "data2.txt");
// let count = path.join(__dirname, "testingFile", "count.txt");
// let countCopy = path.join(__dirname, "testingFile", "countCopy.txt");
// let fscountCopy = path.join(__dirname, "testingFile", "fscountCopy.txt");

// fs.writeFile(path1, "Hello CodeLab", () => {
//   console.log("done");
// });

// let read = fs.createReadStream(path1, { encoding: "utf-8", highWaterMark: 2 });
// let write = fs.createWriteStream(path2);
// read.on("data", (chunk) => {
//   console.log(chunk);

//   write.write(chunk);
// });

// const countWrite = (x: number) => {
//   fs.open(count, "w", (err: any, res: any) => {
//     if (err) throw err;

//     for (let i = 0; i < x; i++) {
//       fs.write(res, `${i}`, () => {});
//     }
//     console.log("done writing");
//   });
// };
// countWrite(1000);

// fs.readFile(count, "utf-8", (err: any, res: any) => {
//   if (err) throw err;

//   console.time("fs copy");

//   fs.writeFile(fscountCopy, res, () => {
//     console.log("copy completed");
//     console.timeEnd("fs copy");
//   });
// });

// let readData = fs.createReadStream(count);
// let writeData = fs.createWriteStream(countCopy);

// console.time("streaaming copy");

// readData.on("data", (chunk) => {
//   writeData.write(chunk);
//   console.timeEnd("streaaming copy");
// });

// let file = path.join(__dirname,"file.html")

// let writefile = fs.writeFile(file,)

import { clear, log } from "node:console";

// if(!fs.existsSync("user")){

//     fs.mkdir("user", () => {
//         console.log("do");

//     })
// }

// let readPath = path.join(__dirname, "index", "index.html")

const port: number = 5577;
const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200);

    const filePath = path.join(__dirname, "html", "index.html");
    fs.readFile(filePath, (err: any, data: any) => {
      if (err) throw err;

      res.end(data);
    });
    // const readStream = fs.createReadStream(filePath);
    // readStream.on("data", (chunk) => {
    //   res.end(chunk);
    // });
  }
);

server.listen(port, () => {
  console.log("serverConnected");
});
