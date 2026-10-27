"use client";

import { products } from "../src/app/products/products";
import Image from "next/image";

export function ProductCard() {
  function test() {
    console.log("button clicked");
  }
  return (
    <>
      {/* Items card grid*/}
      <div className="flex flex-col justify-center mt-5 mb-5 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          /* Actual individual item card */
          <div
            key={product.id}
            className="flex gap-5 p-3 rounded-xl h-auto ml-5 mr-5 bg-white"
          >
            {/* Item card part 1. left part. Parent div for image to center it in mobile view */}
            <div className="">
              {/* Image div */}
              <div className="h-30 w-30 border border-black rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  width={50}
                  height={50}
                  alt="Food preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Part 2. Right part of the item card/quantity selector */}

            <div className="flex flex-col items-right justify-between gap-3">
              {/* Item name & price*/}
              <div>
                <p>{product.name}</p>
                <p>₱{product.price}.00</p>
              </div>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={test}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white text-black transition-colors duration-150 hover:bg-gray-100 active:bg-gray-300"
                >
                  -
                </button>
                <span>0</span>
                <button
                  type="button"
                  onClick={test}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white text-black transition-colors duration-150 hover:bg-gray-100 active:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
