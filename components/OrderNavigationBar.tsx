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
            <Link
              href="/menu"
              className="inline-block text-white border border-white p-2 rounded-xl cursor-pointer w-fit"
            >
              Menu
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
            <Link
              href="/checkout"
              className="inline-block text-white border border-white p-2 rounded-xl cursor-pointer w-fit"
            >
              Checkout
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
            <Link
              href="/done"
              className="inline-block text-white border border-white p-2 rounded-xl cursor-pointer w-fit"
            >
              Done
            </Link>
          </div>
        </div>
      </div>

      {/* Filter buttons stick automatically right below the progress bar */}
      <FilterButtons
        categoryStatus={categoryStatus}
        setCategoryStatus={setCategoryStatus}
      />
    </div>
  );
}
