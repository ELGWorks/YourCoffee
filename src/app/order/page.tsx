import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import type { Metadata } from "next";
import { ProductCard } from "../../../components/ProductCard";

export const metadata: Metadata = {
  title: "Order | YourCoffee",
  description: "We serve your coffee with great love!",
  keywords: ["Coffee"],
};

export default function Order() {
  return (
    <>
      {/* Sets screen to take up the whole screen */}
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="min-h-[calc(100dvh-68px)] flex-1">
          {/* Progress bar */}
          <div className="grid grid-cols-3 text-center pt-2 pb-4 bg-[#724816] border-t border-gray-400">
            <div className="flex flex-col">
              <div className="flex justify-center mb-3">
                <span className="border border-white rounded-full w-5 h-5 bg-white flex items-center justify-center">
                  1
                </span>
              </div>
              <div>
                <span className="text-white border border-white p-2 rounded-xl">
                  Menu
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center mb-3">
                <span className="border border-white rounded-full w-5 h-5 bg-white flex items-center justify-center">
                  2
                </span>
              </div>
              <div>
                <span className="text-white border border-white p-2 rounded-xl">
                  Checkout
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center mb-3">
                <span className="border border-white rounded-full w-5 h-5 bg-white flex items-center justify-center">
                  3
                </span>
              </div>
              <div>
                <span className="text-white border border-white p-2 rounded-xl">
                  Done
                </span>
              </div>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex mt-5 justify-center gap-10">
            <button className="border border-black p-3 rounded-xl cursor-pointer">
              Foods
            </button>
            <button className="border border-black p-3 rounded-xl cursor-pointer">
              Drinks
            </button>
          </div>

          <ProductCard />
        </main>
        <Footer />
      </div>
    </>
  );
}
