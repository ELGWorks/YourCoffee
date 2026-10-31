import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | YourCoffee",
  description: "We serve your coffee with great love!",
  keywords: ["Coffee"],
};

export default function Home() {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="min-h-[calc(100dvh-68px)] flex-1 md:flex md:flex-row justify-center md:gap-10 lg:gap-35 xl:gap-50">
          <div className="flex justify-center items-center flex-col p-4 mt-10">
            <h1 className="text-4xl font-bold pb-10 sm:text-5xl sm:mb-5 md:hidden">
              YourCoffee
            </h1>
            <Image
              src="/images/coffee.webp"
              alt="Coffe Preview"
              width={500}
              height={500}
              className="rounded-xl w-50 h-60 sm:w-80 sm:h-100 md:w-100 md:h-130 lg:w-100 lg:h-130 xl:w-130 xl:h-150 object-cover mb-5"
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-10 mb-10 sm:gap-15 md:m-0 md:gap-15 xl:gap-30">
            <h2 className="text-5xl font-bold hidden md:block xl:text-7xl">
              YourCoffee
            </h2>
            <p className="font-playwrite sm:mt-5 sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
              A Cup of Comfort.
            </p>
            <Link href="/menu">
              <button className="bg-[#724816] px-8 py-4 rounded-xl text-white font-bold text-xl lg:px-16 hover:bg-[#A8783E] transition-colors duration-300 ease-in-out cursor-pointer">
                Order now
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
