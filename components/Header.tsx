import Image from "next/image";
import BusinessLogo from "../public/logos/business-logo.webp";
import { Menu } from "lucide-react";

export function Header() {
  //[#724816] - dark brown
  //[#F0DAAE] - light brown
  return (
    <>
      <header className="flex justify-between items-center bg-[#724816] pt-1 pr-2 pb-1 pl-2">
        <div className="flex items-center gap-2">
          <Image
            src={BusinessLogo}
            alt="Business Logo Preview"
            className="w-15"
          />
          <p className="text-lg text-white">YourCoffee</p>
        </div>
        <nav>
          <button aria-label="Open navigation menu" className="cursor-pointer">
            <Menu size={35} className="text-white" />
          </button>
        </nav>
      </header>
    </>
  );
}
