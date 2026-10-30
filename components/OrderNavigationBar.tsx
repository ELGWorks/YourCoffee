import type { CategoryStatus } from "../types/category";

type OrderNavigationBarProps = {
  categoryStatus: CategoryStatus;
  setCategoryStatus: (category: CategoryStatus) => void;
};

export function OrderNavigationBar({
  categoryStatus,
  setCategoryStatus,
}: OrderNavigationBarProps) {
  function selectCategory(category: CategoryStatus) {
    setCategoryStatus(category);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
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
              <span className="text-white border border-white p-2 rounded-xl">
                Menu
              </span>
            </div>
          </div>
          <div className="flex flex-col opacity-50">
            <div className="flex justify-center mb-3">
              <span className="rounded-full w-5 h-5 bg-white flex items-center justify-center">
                2
              </span>
            </div>
            <div>
              <span className="text-white border border-white p-2 rounded-xl">
                Checkout
              </span>
            </div>
          </div>
          <div className="flex flex-col opacity-50">
            <div className="flex justify-center mb-3">
              <span className="rounded-full w-5 h-5 bg-white flex items-center justify-center">
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
        <div className="flex pt-5 pb-5 justify-center gap-10 bg-[#F0DAAE]">
          <button
            onClick={() => {
              selectCategory("food");
            }}
            className={`p-3 rounded-xl cursor-pointer bg-[#724816] text-white ${categoryStatus === "food" ? "opacity-100" : "opacity-50"}`}
          >
            Foods
          </button>
          <button
            onClick={() => {
              selectCategory("drink");
            }}
            className={`p-3 rounded-xl cursor-pointer bg-[#724816] text-white ${categoryStatus === "drink" ? "opacity-100" : "opacity-50"}`}
          >
            Drinks
          </button>
        </div>
      </div>
    </>
  );
}
