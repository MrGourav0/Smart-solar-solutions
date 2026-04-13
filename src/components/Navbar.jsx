import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const menu = ["Home", "About", "Services", "Projects", ];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header
  className={`fixed z-50 transition-all duration-500 ${
    isOpen
      ? "bg-black/40 backdrop-blur-sm w-full left-0 top-0 py-3 rounded-none"
      : scrolled
      ? "bg-black/40 backdrop-blur-sm shadow-lg w-[92%] left-1/2 -translate-x-1/2 top-1 px-3 py-0 rounded-full"
      : "bg-transparent w-full left-0 top-0 py-1 rounded-none"
  }`}
>
     <div className="max-w-7xl mx-auto flex items-center justify-between px-0 py-0 md:px-0 md:py-0 transition-all duration-500">
 
       {/* Logo */}
<a href="#home" className="flex items-center gap-2 mb-0">
  <img
    src="/SK.png"
    alt="Smart Solar Solutions"
    className="h-14 md:h-15 w-auto"
  />
  {/* <span className="text-sm md:text-md font-bold text-white hover:text-green-400">
    Smart Solar Solutions
    
  </span> */}
</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-400 transition"
            >
              {item}

              {/* hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Contact Button */}
       <Link
to="/contact"
className="bg-gradient-to-r from-green-800 to-green-400 hover:bg-gradient-to-r from-green-800 to-green-600 text-white text-sm md:text-sm px-5 py-2 rounded-full transition"
>
Contact Us
</Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100  "
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center  gap-2 text-white text-lg">

          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a 
            href="#contact"
            className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-600 active:bg-green-700 transition"
          >
            Contact Us
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;