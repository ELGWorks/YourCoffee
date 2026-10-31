import type { CategoryStatus } from "../types/category";
import Link from "next/link";
import FilterButtons from "./FilterButtons";

type OrderNavigationBarProps = {
  categoryStatus: CategoryStatus;
  setCategoryStatus: (category: CategoryStatus) => void;
};

export function OrderNavigationBar({
  categoryStatus,
  setCategoryStatus,
}: OrderNavigationBarProps) {

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Progress bar */}
        <div className="grid grid-cols-3 text-center pt-2 pb-4 bg-[#724816] border-t border-gray-400">
          <div className="flex flex-col">
            <div className="flex justify-center mb-3">
              <span className="rounded-full w-5 h-5 bg-white flex items-center justify-center">
                1
              </span>
            </div>
            <div>
              <Link href="/menu">
                <button className="text-white border border-white p-2 rounded-xl cursor-pointer w-fit">
                  Menu
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col opacity-50">
            <div className="flex justify-center mb-3">
              <span className="rounded-full w-5 h-5 bg-white flex items-center justify-center">
                2
              </span>
            </div>
            <div>
              <Link href="/checkout">
                <button className="text-white border border-white p-2 rounded-xl cursor-pointer w-fit">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col opacity-50">
            <div className="flex justify-center mb-3">
              <span className="rounded-full w-5 h-5 bg-white flex items-center justify-center">
                3
              </span>
            </div>
            <div>
              <Link href="/done">
                <button className="text-white border border-white p-2 rounded-xl cursor-pointer w-fit">
                  Done
                </button>
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
