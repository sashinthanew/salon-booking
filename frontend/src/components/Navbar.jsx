import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/home"
            className="text-4xl font-extrabold tracking-wide text-pink-500 hover:text-pink-400 transition duration-300"
          >
            Barber Ceylon
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 font-semibold text-lg">
            <Link
              to="/home"
              className="hover:text-pink-400 transition duration-300 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-pink-400 transition duration-300 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/book"
              className="hover:text-pink-400 transition duration-300 px-3 py-2 rounded-md"
            >
              Book
            </Link>
            <Link
              to="/about"
              className="hover:text-pink-400 transition duration-300 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-pink-400 transition duration-300 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-md text-white font-semibold transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
              aria-label="Toggle menu"
            >
              <svg
                className="w-10 h-10 text-pink-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-90 px-8 py-6 space-y-5 font-semibold text-lg">
            <Link
              to="/home"
              className="block hover:text-pink-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block hover:text-pink-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/book"
              className="block hover:text-pink-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book
            </Link>
            <Link
              to="/about"
              className="block hover:text-pink-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block hover:text-pink-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-md text-white font-semibold text-center transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Spacer div so content doesn't go under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
