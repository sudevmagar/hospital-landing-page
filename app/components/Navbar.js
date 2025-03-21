"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "home", path: "#home" },
    { name: "services", path: "#services" },
    { name: "about", path: "#about" },
    { name: "doctors", path: "#doctors" },
    { name: "book", path: "#book" },
    { name: "review", path: "#review" },
    { name: "blogs", path: "#blogs" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-controls="mobile-menu"]')
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 300);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl">
          <Link href="/">
            <span className="font-bold text-[#444]">
              Logo
            </span>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
          <div className="flex space-x-6 text-lg">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setIsHovered(link.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Link
                  href={link.path}
                  className={`text-[#777] transition-colors ${
                    pathname === link.path ? "font-semibold text-[#16a085]" : "hover:text-[#16a085]"
                  }`}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#16a085] transition-all duration-300 ${
                    pathname === link.path
                      ? "scale-x-100"
                      : isHovered === link.name
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <Link
            href="#book"
            className="hidden md:block px-6 py-4 text-[#16a085] border-2 border-[#16a085] hover:text-white ml-4 hover:bg-[#16a085] transition-colors rounded-md shadow-md"
          >
            Book Now
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-[#16a085] rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#16a085]"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#16a085] to-[#16a085]/80 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full px-6 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="font-bold text-white text-2xl">
                <i className="fas fa-heartbeat mr-1"></i> medcare.
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:bg-[#16a085]/50 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow space-y-6 text-lg">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setIsHovered(link.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Link
                  href={link.path}
                  className={`text-white font-semibold transition-colors hover:text-gray-200 ${
                    pathname === link.path ? "font-bold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                    pathname === link.path
                      ? "scale-x-100"
                      : isHovered === link.name
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="mt-6 mb-6">
            <Link
              href="#book"
              className="bg-white text-[#16a085] px-8 py-3 text-lg font-bold hover:bg-gray-100 transition-colors block text-center shadow-md rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;