import Image from "next/image";
import Link from 'next/link';

export function Footer() {
  return (
    <>
      <footer className="flex flex-col w-full bottom-0 bg-[#724816] pt-1 pr-2 pb-1 pl-2">
        <nav className="flex gap-3 pt-5 pb-5">
          <a href="#">
            <Image
              src="/icons/facebook-logo.svg"
              alt="Facebook"
              width={35}
              height={35}
              className="brightness-0 invert"
            />
          </a>
          <a href="#">
            <Image
              src="/icons/twitter-logo.svg"
              alt="Facebook"
              width={35}
              height={35}
              className="brightness-0 invert"
            />
          </a>
          <a href="#">
            <Image
              src="/icons/instagram-logo.svg"
              alt="Facebook"
              width={35}
              height={35}
              className="brightness-0 invert"
            />
          </a>
          <a href="#">
            <Image
              src="/icons/youtube-logo.svg"
              alt="Facebook"
              width={35}
              height={35}
              className="brightness-0 invert"
            />
          </a>
        </nav>
        <div className="flex flex-col gap-3 pl-1">
          <Link href="/" className="self-start text-white">
            Home
          </Link>
          <Link href="/order" className="self-start text-white">
            Order Now
          </Link>
          <Link href="/about-us" className="self-start text-white">
            About us
          </Link>
          <a href="/privacy-policy" className="self-start text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="self-start text-white">
            Terms of Use
          </a>
          <p className="text-white pt-5">© 2026 YourCoffee. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
