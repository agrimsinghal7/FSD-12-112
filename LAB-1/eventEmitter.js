import { EventEmitter } from "node:events";
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
task.once("greet", start);
task.on("greet", login);
task.on("greet", working);
task.on("greet", checkout);

task.once("exit", (name) => {
  console.log(`${name} is shutting down`);
});

task.emit("greet", "Agrim Singhal");
task.emit("greet", "Aditya verma");
task.off("greet", working);
task.emit("greet", "Anav Singhal");
task.emit("exit","Manager");
//nameless fucntion    ()=>{}
