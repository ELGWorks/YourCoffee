import { CategoryStatus } from "../types/category";

type FilterButtonsProps = {
  categoryStatus: CategoryStatus;
  setCategoryStatus: (category: CategoryStatus) => void;
};

export default function FilterButtons({ categoryStatus, setCategoryStatus }: FilterButtonsProps) {
  function selectCategory(category: CategoryStatus) {
    setCategoryStatus(category);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
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
    </>
  );
}
