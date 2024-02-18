import React from 'react'
import Link from "next/link";

const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
  return (
    <div>
        <div 
          className="h-52 md:h-72 rounded-t-xl relative group" 
          style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}>
          <div className="overlay absolute top-0 left-0 w-full h-full items-center justify-center bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-85 transition-all duration-500">
            <Link href={gitUrl} target="_blank">
              <button className="text-white bg-[#141414] border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
                Go to GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#181818] p-6">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#d3d3d3]">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard