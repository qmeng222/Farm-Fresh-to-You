## Farm Fresh to You - one-stop shop for local fruits & veggies built on Node.js

<br>

### Tech stack:

- JavaScript
- html
- css
- Node.js
- Express.js

<br>

### Key features:

- multiple choices of farm items
- vegetable details
- online payments

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
- start the app: $ npm start
- deployed version (feel free to visit): https://farm-fresh-to-you.herokuapp.com/
