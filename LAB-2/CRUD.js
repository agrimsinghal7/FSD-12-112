import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, null, 2));
};

const addToCart = async (product) => {
  const myCart = await getCart();

  const isFound = myCart.find((item) => item.id === product.id);

  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }

  await saveCart(myCart);

  console.log(`Product added with id ${product.id} into cart`);
};

const showCart = async () => {
  const myCart = await getCart();

  if (myCart.length === 0) {
    console.log("Cart is empty!");
  } else {
    console.table(myCart);
  }
};

const main = async () => {
  let choice;

  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  do {
    console.log("\nWelcome to Flipkart 😆");
    console.log("1............Show cart");
    console.log("2............Add Product");
    console.log("3............Remove Product");
    console.log("4............Update Quantity");
    console.log("5............Exit");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        console.log("Showing cart...");
        await showCart();
        break;

      case 2:
        const data = await cin.question("Enter id,name,price,qty: ");

        const [id, name, price, qty] = data
          .split(",")
          .map((item) => item.trim());

        const product = {
          id: Number(id),
          name: name,
          price: Number(price),
          qty: Number(qty),
        };

        await addToCart(product);
        break;

      case 3:
        console.log("Removing product...");
        break;

      case 4:
        console.log("Updating quantity...");
        break;

      case 5:
        console.log("See you later...");
        break;

      default:
        console.log("Invalid choice! Try again 😅");
    }
  } while (Number(choice) !== 5);

  cin.close();
};

main();
