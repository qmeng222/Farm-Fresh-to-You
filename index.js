// 'fs' is a built-in module name
// the node:fs module enables interacting with the file system
// require the fs module will return an object in which there are lots of functions that we can use
// store this object into the fs variable
const fs = require("fs");
// require the built-in http modules:
const http = require("http");
const url = require("url");

// // 7. test msg:
// const greet = "Hi Meng!";
// console.log(greet);

//////////////// FILES ///////////////////
// // 8. reading and writing files:
// const textIn = fs.readFileSync("starter/txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `About avocado: ${textIn}\nCreated on ${Date.now()}`;
// console.log(textOut);
// fs.writeFileSync("starter/txt/output.txt", textOut);
// console.log("File was created and written!");

// // 10. reading and writing files asynchronously:
// fs.readFile("starter/txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("starter/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "starter/txt/final.txt",
//         `${data2}\n${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file has been written😀");
//         }
//       );
//     });
//   });
// });
// console.log("Will read file!");
// // Will read file!
// // read-this

//////////////// SERVER ///////////////////
// read the file synchronously:
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

// 11. create web server:
// created server and passed in a callback function that is executed each time that a new request hits the server:
const server = http.createServer((req, res) => {
  // console.log(req.url);
  // res.end("Hello from the server!");

  const pathName = req.url;

  // Overview:
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW");

    // Product:
  } else if (pathName === "/product") {
    res.end("This is PRODUCT");

    // API:
  } else if (pathName === "/api") {
    // specifying that we're sending back application/json, so that the browser knows exactly what to expect:
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    // Not found:
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-heaer": "Hi, Qingying!",
    });
    res.end("<h1>Page not found!</h1>");
    // res.end("Page not found!");
  }
});

// start listening for incoming requests on the local host IP port 8000:
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
