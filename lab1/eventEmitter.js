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
const task = new EventEmitter();
task.on("login", login);
task.on("start", start);
task.on("working", working);
task.on("checkout", checkout);
login("John");
start();
working("John");
checkout("John");
