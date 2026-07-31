import { writeFile } from "fs/promises";

await writeFile("hello.txt", "JS is easy");
await writeFile("hello2.txt", "JS is super easy");
