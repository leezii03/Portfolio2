import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeNavbar = () => {
    setIsOpen(false); // Close menu after click
  }


  return (
    <nav className="fixed z-10 w-full top-0 left-0 bg-gray-100 border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <h1 className="font-bold text-xl">
          LyLy's <span className="text-blue-800">Portfolio</span>
        </h1>

        {/* Hamburger button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-x-6 cursor-pointer">
          <li onClick={scrollToHero}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white shadow">
          <li onClick={() => {scrollToHero(); closeNavbar();}} className='hover:bg-blue-100 duration-300 px-4 py-4'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='hover:bg-blue-100 duration-300 px-4 py-4' onClick={closeNavbar}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className='hover:bg-blue-100 duration-300 px-4 py-4' onClick={closeNavbar}>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className='hover:bg-blue-100 duration-300 px-4 py-4' onClick={closeNavbar}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className='hover:bg-blue-100 duration-300 px-4 py-4' onClick={closeNavbar}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
