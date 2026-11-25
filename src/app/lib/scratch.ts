import { Cart } from "./cart";

const cart = new Cart();

const croissant = {
  id: 1,
  name: "Croissant",
  type: "food" as const,
  price: 90,
  image: "croissant.png",
  quantity: -1,
};

const latte = {
  id: 2,
  name: "Latte",
  type: "drink" as const,
  size: "small" as const,
  price: 90,
  image: "croissant.png",
  quantity: 1,
};

const latte2 = {
  id: 2,
  name: "Latte",
  type: "drink" as const,
  size: "medium" as const,
  price: 90,
  image: "croissant.png",
  quantity: 1,
};

// cart.addToCart(croissant);
// cart.addToCart(croissant);
// cart.addToCart(croissant);

cart.addToCart(latte);
cart.addToCart(latte2);
cart.addToCart(latte);

console.log(cart.cartItems);