
import Home from "./home/page"
import Navbar from "./Navbar";



export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Home />
      </main>
    </>
  );
}
