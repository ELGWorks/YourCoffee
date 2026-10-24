import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

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
