"use client";

import { useRef, useEffect } from "react";
import { CartItem } from "../types/cart";

type SummaryBarProps = {
  cart: CartItem[];
};

export function SummaryBar({ cart }: SummaryBarProps) {
  const cartItemListDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cartItemListDiv.current) {
      cartItemListDiv.current.scrollTop = cartItemListDiv.current.scrollHeight;
    }
  }, [cart])

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
        <div ref={cartItemListDiv} className="max-h-[180px] overflow-y-auto">
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
              <div className="flex items-center">
                {" "}
                <button
                  type="button"
                  aria-label="Remove item"
                  className="text-red-500 border border-red-300 p-1 rounded-xl transition-colors duration-300 hover:bg-red-500 hover:text-white hover:border-red-500 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="h-6 w-6"
                  >
                    <rect width="256" height="256" fill="none" />
                    <line
                      x1="216"
                      y1="56"
                      x2="40"
                      y2="56"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <line
                      x1="88"
                      y1="24"
                      x2="168"
                      y2="24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
                </button>
              </div>
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
