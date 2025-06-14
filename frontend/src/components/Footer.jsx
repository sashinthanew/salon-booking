import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-pink-600 bg-opacity-20 backdrop-blur-md shadow-md text-white py-10 mt-12 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Brand and copyright */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-200 transition-colors duration-300">Barber Ceylon</h2>
          <p className="text-sm mt-1 text-pink-100 transition-opacity duration-300">
            &copy; {new Date().getFullYear()} Barber Ceylon. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          {["home", "services", "booking", "about", "contact"].map((link) => (
            <Link
              key={link}
              to={`/${link}`}
              className="hover:underline hover:text-pink-300 text-pink-100 font-semibold transition duration-300"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>

        {/* Social & Contact Info */}
        <div className="text-center md:text-right space-y-2 text-pink-100 transition duration-300">
          <p className="transition hover:text-pink-300">Call us: +94 77 123 4567</p>
          <p className="transition hover:text-pink-300">Email: contact@barberceylon.lk</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 text-2xl transition duration-300"
            >
              📘
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 text-2xl transition duration-300"
            >
              📸
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-300 text-2xl transition duration-300"
            >
              🐦
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
