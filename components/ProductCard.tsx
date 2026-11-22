import { products } from "../src/app/data/products";
import Image from "next/image";
import { CategoryStatus } from "../types/category";
import { cart } from "../src/app/data/cart";

type ProductCardProps = {
  categoryStatus: CategoryStatus;
};

export function ProductCard({ categoryStatus }: ProductCardProps) {
  const filteredProducts = products.filter((product) => {
    return product.type === categoryStatus;
  });

  function addToCart(productId: number) {
    console.log(productId);
    // cart.push(productId);
    console.log(cart);
  }

  return (
    <>
      {/* Items card grid*/}
      <div className="grid justify-center mb-5 gap-5 grid-cols-1 md:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredProducts.map((product) => (
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
                {/* Sizes for drinks */}
                {product.type === "drink" && (
                  <div className="flex flex-row gap-5 items-center">
                    <button className="flex justify-center items-center bg-gray-300 rounded-full w-6 h-6 text-black cursor-pointer hover:bg-[#724816] hover:text-white">
                      S
                    </button>
                    <button className="flex justify-center items-center bg-gray-300 rounded-full w-6 h-6 text-black cursor-pointer hover:bg-[#724816] hover:text-white">
                      M
                    </button>
                    <button className="flex justify-center items-center bg-gray-300 rounded-full w-6 h-6 text-black cursor-pointer hover:bg-[#724816] hover:text-white">
                      L
                    </button>
                  </div>
                )}
              </div>
              {/* Add and remove buttons */}
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white text-black transition-colors duration-150 hover:bg-gray-100 active:bg-gray-300"
                >
                  -
                </button>
                <span>0</span>
                <button
                  onClick={() => addToCart(product.id)}
                  type="button"
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
