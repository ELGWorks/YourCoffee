import { CartItem } from ".././../../types/cart";

export class Cart {
  private items: CartItem[] = [];

  get cartItems(): CartItem[] {
    return [...this.items];
  }

  addToCart(product: CartItem): void {
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
      
      const exist = this.items.find((item) => item.id === product.id && item.type === "drink" && item.size === product.size);

      if (exist ) {
        exist.quantity += product.quantity;
      } else {
        this.items.push({ ...product });
      }
      
    }
  }
}
