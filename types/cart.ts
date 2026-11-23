import { Product } from "./product";

export type CartItemFood = Product & {
  type: "food";
  quantity: number;
};

export type CartItemDrink = Product & {
  type: "drink";
  size: "small" | "medium" | "large";
  quantity: number;
};

export type CartItem = CartItemFood | CartItemDrink;