import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavLinks = ["Home", "Cars", "Favorites", "Contact"];

function Navbar() {

const [active, setActive] = useState("Home");
const [menuOpen, setMenuOpen] = useState(false);

return (

    <nav className="bg-[#12121f] border-b border-white/5 text-white">

      {/* Navbar Container */}
    <div className="max-w-6xl mx-auto px-6 h-15 flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-bold text-2xl italic">
        <span className="text-orange-600">Auto</span>Drive
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-16">

        {NavLinks.map((link) => (

            <Link
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
    onClick={() => setActive(link)}
    className={`text-sm relative pb-1 duration-200
    ${active === link
    ? "text-white after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-0.5 after:bg-orange-500"
    : "text-slate-400 hover:text-white"
    }`}
            >
            {link}
            </Link>

        ))}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Heart Icon */}
        <button className="text-orange-500">
            <FaRegHeart size={20} />
        </button>

          {/* Hamburger Button */}
        <button
            className="md:hidden flex flex-col gap-1.25"
            onClick={() => setMenuOpen(!menuOpen)}
        >

            <span
            className={`w-6 h-0.5 bg-white duration-300
            ${menuOpen ? "rotate-45 translate-y-1.75" : ""}
            `}
            />

            <span
            className={`w-6 h-0.5 bg-white duration-300
            ${menuOpen ? "opacity-0" : ""}
            `}
            />

            <span
            className={`w-6 h-0.5 bg-white duration-300
            ${menuOpen ? "-rotate-45 -translate-y-1.75" : ""}
            `}
            />

        </button>

        </div>

    </div>

      {/* Mobile Menu */}
    <div
        className={`md:hidden overflow-hidden duration-300
        ${menuOpen ? "max-h-64" : "max-h-0"}
    `}
    >

        {NavLinks.map((link) => (

        <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setActive(link)}
            className={`text-sm relative pb-1 duration-200
            ${active === link
            ? "text-white after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-0.5 after:bg-orange-500"
            : "text-slate-400 hover:text-white"
            }`}
            >
            {link}
        </Link>

        ))}

    </div>

    </nav>

);
}

export default Navbar;