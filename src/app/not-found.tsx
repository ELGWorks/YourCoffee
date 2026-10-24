import BusinessLogo from "../public/logos/business-logo.webp";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col">

        <main className="flex-1 justify-center p-4">
          <div className="flex flex-col justify-center items-center">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
          </div>
        </main>

      </div>
    </>
  );
}
