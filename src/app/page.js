import Heading from "./components/Heading";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#141414]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <NavBar />
        <Heading />
      </div>
    </main>
  );
}
