import React from 'react'
import Link from 'next/link'
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-3">
            <Link href={"/"} className="text-3xl text-white font-semibold">
                Kerry Creech
            </Link>
            <div className="menu block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                    <li><NavLink href={"/"} title={"Home"} /></li>
                    <li><NavLink href={"/projects"} title={"Projects"} /></li>
                    <li><NavLink href={"/about"} title={"About"} /></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar