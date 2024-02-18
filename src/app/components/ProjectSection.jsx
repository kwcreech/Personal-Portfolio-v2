import React from 'react'
import ProjectCard from "./ProjectCard";

// Holds all projects
const projectsList = [
    {
        id: 1,
        title: "Insurance Policy Manager",
        description: "Reads info from a text file, creating profiles for policyholders and their policies, storing them all in one place. Made for CSC251 at CPCC.",
        image: "/images/csc251proj.PNG",
        gitUrl: "https://github.com/kwcreech/CSC251Project",
    }
]

const ProjectSection = () => {
  return (
    <div>
        <h1 className="text-center text-4xl font-extrabold text-white mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
            My Projects
          </span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsList.map((project) => 
              <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                gitUrl={project.gitUrl}
              />
              )
            }
        </div>
    </div>
  )
}

export default ProjectSection