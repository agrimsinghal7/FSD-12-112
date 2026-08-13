import { writeFile, appendFile, readFile } from "fs/promises";

//await writeFile("hello.txt", "JS is easy");

//await appendFile("hello.txt", "\nFS My name is Agrim Singhal");

const content = await readFile("hello.txt", "utf-8");
console.log(content);
