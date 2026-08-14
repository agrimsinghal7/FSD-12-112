import readline from "readline/promises";
import { stdin, stdout } from "process";

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart 😆");
    console.log("1............Show cart");
    console.log("2.............Add Product");
    console.log("3............Remove Product");
    console.log("4............Update Quantity");
    console.log("5............Exit");

    choice = await cin.question("Enter your choice:");
    switch (choice) {
      case "1":
        console.log("Showing cart...");
        break;
      case "2":
        console.log("Adding product...");
        break;
      case "3":
        console.log("Removing product...");
        break;
      case "4":
        console.log("Updating quantity...");
        break;
      case "5":
        console.log("See you later...");
        break;
      default:
        console.log("Invalid choice! try again 😅");
    }
  } while (choice != 5);
  cin.close();
};

main();
