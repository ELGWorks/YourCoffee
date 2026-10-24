import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | YourCoffee",
  description: "The page you are looking for is not available."
};

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex justify-center flex-col gap-20 items-center p-4">
          <h1 className="text-2xl font-bold">
            Oh no... The page you are looking for is not available.
          </h1>
          <button className="text-xl text-white border border-none bg-[#724816] px-5 pt-4 pb-5 rounded-xl">
            <Link href="/">
              Back to Home
            </Link>
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
}
