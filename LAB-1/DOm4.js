// Dom -> Document Object Model
const { EventEmitter } = require("events");

const form = new EventEmitter();

form.on("submit", (uname, password) => {
  console.log("form submitted");
  console.log(`username: ${uname}`);
  console.log(`user password: ${password}`);
});

form.emit("submit", "abc@abc.com", "11223322");
