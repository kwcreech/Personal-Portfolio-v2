import NavBar from "../components/NavBar";
import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#141414]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <NavBar />
        <ProjectSection />
      </div>
    </main>
  )
}