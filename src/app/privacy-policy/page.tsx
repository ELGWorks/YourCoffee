import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <p>Hello world</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
