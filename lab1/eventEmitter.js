import {EventEmitter} from "node:events";
const login = (name) => {
  console.log(`${name} logged in`);
};

const start = () => {
  console.log("Server started");
};

const working = (name) => {
  console.log(`${name} added items to cart`);
};

const checkout = (name) => {
  console.log(`${name} logged out`);
};

login("John");
start();
working("John");
checkout("John");
