import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <h1>About Us</h1>
          <p>Hello world</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
