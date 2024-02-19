import React from 'react'
import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
        <h1 className="text-center text-4xl font-extrabold text-white mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
            About Me
          </span>
        </h1>
        <div>
            <p className="text-[#d3d3d3] text-lg lg:text-xl mb-7 leading-loose lg:leading-loose">
                Hi! I'm from Charlotte, NC, and a student at UNC Chapel Hill.
                At UNC, I am involved with organizations including TechX, CS+SG, and the Asian American Students Association.
                <br></br>In my free time, I enjoy speedcubing, which is trying to solve a Rubik's Cube as fast as possible.
                I've been competing in official speedcubing competitions for 6 years, and my fastest time is 5.11 seconds, which ranked 75th in the world at the time!
                Also, back in 2022, I won the North American Championship in the FMC event, which is an event where you are given an hour to find the shortest
                possible solution to a given scramble.
            </p>
            <Image 
                src="/images/nats23.jpeg"
                alt="Me competing at CubingUSA Nationals 2023"
                className="flex mx-auto justify-center"
                height={300}
                width={300}
            />
        </div>
        <div>
        <p className="text-[#d3d3d3] text-lg lg:text-xl mt-7 leading-loose lg:leading-loose">
            My passion for Computer Science began in the 7th grade, when I joined my school's coding club. There, I learned the basics of frontend
            development with HTML and CSS. I immediately began creating websites about anything I could think of.
            <br></br>Later on, in high school, I took CS courses through dual enrollment, and learned a lot about Java and backend development in general.
            Now, here at UNC, being a part of organizations like TechX allows me to get involved with projects that will further enhance my technical skills.
        </p>
        </div>
    </div>
  )
}

export default AboutMe