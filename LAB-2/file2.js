import { readFile, writeFile, appendFile } from "fs/promises";

const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log(e.message);
    console.log("file not found", e);
  } finally {
    console.log("Read data finished");
  }
};

const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content, "utf-8");
  } catch (e) {
    console.log(e.message);
    console.log("File not found", e);
  } finally {
    console.log("Write data finished");
  }
};

const appendData = async (filename, content) => {
  try {
    await appendFile(filename, content, "utf-8");
  } catch (e) {
    console.log(e.message);
    console.log("File not found", e);
  } finally {
    console.log("Append data finished");
  }
};

const deletefile = async (filename) => {
  try {
    await unlink(filename);
  } catch (e) {
    console.log(e.message);
    console.log("File not found", e);
  } finally {
    console.log("Delete data finished");
  }
};

//Note:- If a function uses await keyword then the function must be async function otherwise it will throw an error.
const data = await readData("file1.js");
console.log(data);
const data1 = await readData("file2.js");
console.log(data1);
const data2 = await readData("file3.js");
console.log(data2);
const write = await writeData("file4.js", "console.log('Hello World');");
const append = await appendData("file4.js", "\nconsole.log('Hello World');");
