import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | YourCoffee",
  description: "With every cup, with every conversation, with every community - we nurture the limitless possibilities of human connection.",
  keywords: [
    "Filipino food",
    "Filipino dishes",
    "Filipino cuisine",
    "adobo",
    "sinigang",
    "lechon",
    "traditional Filipino recipes",
  ],
};

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-4">Hello world</main>
        <Footer />
      </div>
    </>
  );
}
