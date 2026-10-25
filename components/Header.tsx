import Image from "next/image";
import BusinessLogo from "../public/logos/business-logo.webp";
import Link from "next/link";

export function Header() {
  //[#724816] - dark brown
  //[#F0DAAE] - light brown
  return (
    <>
      <header className="flex justify-between items-center bg-[#724816] pt-2 pr-2 pb-2 pl-2">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src={BusinessLogo}
              alt="Business Logo Preview"
              className="w-15"
              loading="eager"
            />
          </Link>
        </div>
        <nav>
          {/* Mobile view burger menu */}
          <button aria-label="Open navigation menu" className="cursor-pointer md:hidden">
            <Image
              src="/icons/menu.svg"
              alt=""
              width={35}
              height={35}
              className="brightness-0 invert"
            />
          </button>
        </nav>
      </header>
    </>
  );
}
