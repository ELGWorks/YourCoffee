import { CartItem } from ".././../../types/cart";

export class Cart {
  private items: CartItem[] = [];

  get cartItems(): CartItem[] {
    return [...this.items];
  }

  addToCart(product: CartItem): void {
    if (product.type !== "food" && product.type !== "drink") {
      throw new Error("Item type must be food or drink");
    }

    if (product.quantity <= 0 || !Number.isInteger(product.quantity)) {
        throw new Error("Quantity must be a positive whole number.");
    }

    if (product.type === "food") {
      const exist = this.items.find((item) => item.id === product.id);

      if (exist) {
        exist.quantity += product.quantity;
      } else {
        this.items.push({ ...product });
      }
    } else if (product.type === "drink") {
      //logic for drinks
    }

    //this.items.push(product);
    console.log(this.items);
  }
}
