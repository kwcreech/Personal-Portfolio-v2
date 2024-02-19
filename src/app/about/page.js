import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";

export default function About() {
    return (
      <main className="flex min-h-screen flex-col bg-[#141414]">
        <div className="container mt-24 mx-auto px-12 py-4">
          <NavBar />
          <AboutMe />
        </div>
      </main>
    )
  }