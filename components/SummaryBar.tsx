import { CartItem } from "../types/cart";

type SummaryBarProps = {
  cart: CartItem[];
};

export function SummaryBar({ cart }: SummaryBarProps) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const cartQuantity = cart.reduce(
    (cartItemQuantities, item) => cartItemQuantities + item.quantity,
    0,
  );

  return (
    <>
      <div className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300">
        <div className="max-h-[120px] overflow-y-auto">
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="flex justify-between ml-5 mr-5 border-t border-gray-300 h-15 shrink-0"
            >
              <div className="flex-col-reverse">
                <p className="text-lg">
                  {cartItem.quantity}x {cartItem.name}
                </p>
                <p className="text-lg">
                  ₱{cartItem.quantity * cartItem.price}.00
                </p>
              </div>
              <div className="flex items-center">Trash icon here</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-gray-300">
          <div className="ml-5">
            <p className="text-xl">
              <b>{cartQuantity} items</b>
            </p>
            <p className="text-xl">
              <b>Total: ₱{totalPrice}.00</b>
            </p>
          </div>
          <button className="bg-[#724816] p-2 mr-5 rounded-xl text-white text-xl lg:px-16 hover:bg-[#A8783E] transition-colors duration-300 ease-in-out cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
