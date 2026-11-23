import { CartItem } from '.././../../types/cart';

export class Cart {
    private items: CartItem[] = [];

    get cartItems(): CartItem[] {
        return [...this.items];
    }
}