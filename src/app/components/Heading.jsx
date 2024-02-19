"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const Heading = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center sm:text-center text-center lg:text-left">
                <h1 className="text-white mb-8 text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                        Hi, I'm {""}
                    </span>
                    <TypeAnimation
                        sequence={[
                            'Kerry',
                            1000,
                            'A CS Student',
                            1000,
                            'A Developer',
                            1000,
                            'A Speedcuber',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#d3d3d3] text-lg lg:text-xl mb-7 leading-loose lg:leading-loose">
                    Hi! I am Kerry Creech. I'm a freshman at the University of North Carolina at Chapel Hill, majoring in Computer Science (B.S.) with a minor in Chinese.
                    I currently have experience with Java, HTML, CSS, and NextJS.
                    Thank you for visiting my Portfolio!
                </p>
                <div>
                    <Link href="https://www.linkedin.com/in/kerry-creech-b36b772aa/" target="_blank">
                        <button className="font-semibold p-5 rounded-full mr-4 text-black bg-gradient-to-br from-indigo-500 to-cyan-400 border border-white px-6 py-3 rounded-full hover:text-[#d3d3d3]">
                            LinkedIn
                        </button>
                    </Link>
                    <Link href="https://github.com/kwcreech" target="_blank">
                        <button className="font-semibold p-5 rounded-full text-black bg-gradient-to-br from-indigo-500 to-cyan-400 border border-white px-6 py-3 rounded-full hover:text-[#d3d3d3]">
                            GitHub
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/Headshot.jpg"
                        alt="Headshot image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Heading