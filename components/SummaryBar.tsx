export function SummaryBar() {
  return (
    <>
      <div className="flex items-center justify-between bg-white">
        <div className="ml-5">
          <p className="text-xl">3 items</p>
          <p className="text-xl">$0.00</p>
        </div>
        <button className="bg-[#724816] p-2 mr-5 rounded-xl text-white text-xl lg:px-16 hover:bg-[#A8783E] transition-colors duration-300 ease-in-out cursor-pointer">
          Continue
        </button>
      </div>
    </>
  );
}
