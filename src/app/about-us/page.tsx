import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | YourCoffee",
  description: "Get to know more about YourCoffee. Learn its history and why it serves coffee."
};

export default function AboutUs() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p>Hello world</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
