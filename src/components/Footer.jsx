// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex justify-between flex-wrap">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <Link to="/">SkillSwap</Link>
        </div>

        {/* Quick Links */}
        <div className="space-y-2 md:space-y-0 md:flex md:space-x-6">
          <Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link>
          <Link to="/features" className="hover:text-gray-300 transition duration-300">Features</Link>
          <Link to="/testimonials" className="hover:text-gray-300 transition duration-300">Testimonials</Link>
          <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-6 text-center">
        <p className="text-lg mb-4">Subscribe to our newsletter</p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-l-lg border-none text-black"
          />
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-r-lg text-white transition duration-300">
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center">
        <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
