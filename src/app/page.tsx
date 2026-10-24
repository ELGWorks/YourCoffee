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
        <main className="min-h-[calc(100dvh-68px)] flex-1">
          <div className="flex justify-center items-center flex-col p-4 mt-10">
            <h1 className="text-4xl font-bold pb-10">YourCoffee</h1>
            <Image
              src="/images/coffee.webp"
              alt="Coffe Preview"
              width={500}
              height={500}
              className="rounded-xl h-60 w-50 object-cover mb-5"
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-10 mb-10">
            <p>A Cup of Comfort.</p>
            <button className="bg-[#724816] px-8 py-4 rounded-xl text-white font-bold text-xl">
              <Link href="/order">Order now</Link>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
