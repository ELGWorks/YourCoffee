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

cart.addToCart(croissant);
cart.addToCart(croissant);
cart.addToCart(croissant);

console.log(cart.cartItems);