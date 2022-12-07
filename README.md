## Farm Fresh to You - one-stop shop for local fruits & veggies built on Node.js

<br>

### Tech stack:

- JavaScript
- html
- css
- Node.js (as the dynamic web server)
- Express.js

<br>

### Key features:

- multiple choices of farm items
- product details
- checkout option

  ![GIF](/images/farm-fresh-to-you_home-page.png)
  ![GIF](/images/farm-fresh-to-you_product-detail.png)

<br>

### Project setup:

- repo: https://github.com/qmeng222/Farm-Fresh-to-You.git
- set up a new npm package: $ npm init, package.json file is created
- install project dependencies: $ npm install <package-name1> <package-name2> ..., now package.json file is updated with these dependencies
  ```
  npm install slugify
  npm install --save-dev nodemon  // local install
  ```
- enable local dependency: package.json > replace "test": "echo \"Error: no test specified\" && exit 1" with "start": "nodemon index.js"
- use nodemon to watch every file with every extension:
  ```
  npm run start      // if installed locally
  nodemon index.js   // if installed globally
  ```
- install express: $ npm i express

<br>

### To run ths project:

1. $ git clone https://github.com/qmeng222/Farm-Fresh-to-You.git
2. install project dependencies: $ npm install
3. start nodemon: $ npm run start
4. run root file: $ nodemon index.js or $ node index.js
5. refresh browser:
   - home page: http://127.0.0.1:8000/ or http://127.0.0.1:8000/overview
   - product details example: http://127.0.0.1:8000/product?id=0
