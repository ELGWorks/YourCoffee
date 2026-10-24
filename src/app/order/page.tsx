import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order | YourCoffee",
  description: "We serve your coffee with great love!",
  keywords: ["Coffee"],
};

export default function Order() {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="min-h-[calc(100dvh-68px)] flex-1">
          <div className="grid grid-cols-3 text-center pt-5 pb-5 bg-[#925F49]">
            <div>Menu</div>
            <div>Checkout</div>
            <div>Done</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
