// 'fs' is a built-in module name
// the node:fs module enables interacting with the file system
// require the fs module will return an object in which there are lots of functions that we can use
// store this object into the fs variable
const fs = require("fs");
// require the built-in http modules:
const http = require("http");
const url = require("url");

//////////////// SERVER ///////////////////

// read the files synchronously:
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data); // convert text into JS object

// helper function:
const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  // mutate the output after it has been created:
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  if (!product.organic)
    // .not-organic {display: none;} in template-product.html:
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  return output;
};

// created server and passed in a callback function that is executed each time that a new request hits the server:
const server = http.createServer((req, res) => {
  // console.log("REQ.URL:", req.url);
  // // /product?id=0
  // console.log("URL:", url);
  // // {Url: [Function: Url], parse: [Function: urlParse], ...}
  // console.log(url.parse(req.url, true));
  // // Url {..., query: [Object: null prototype] { id: '0' }, pathname: '/product', ...}
  const { query, pathname } = url.parse(req.url, true);

  // Overview:
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);

    // Product:
  } else if (pathname === "/product") {
    // console.log(query, pathname);
    // // [Object: null prototype] { id: '0' } /product
    // console.log(query.id);
    // // 0
    const product = dataObj[query.id]; // eg: dataObj[0] --> object avocado
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    // API:
  } else if (pathname === "/api") {
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
