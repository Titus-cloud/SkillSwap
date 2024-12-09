import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Ensure you import the Firebase auth instance
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign the user out
      navigate("/login"); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">
            SkillSwap
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link></li>
          <li><Link to="/features" className="hover:text-gray-300 transition duration-300">Features</Link></li>
          <li><Link to="/testimonials" className="hover:text-gray-300 transition duration-300">Testimonials</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact</Link></li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          {/* If the user is logged in, show Sign Out */}
          {auth.currentUser ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300 text-white"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 text-white">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition duration-300 text-white">Sign Up</button>
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-center space-y-4 py-4 md:hidden">
            <li><Link to="/about" className="block hover:text-gray-300 transition duration-300">About</Link></li>
            <li><Link to="/features" className="block hover:text-gray-300 transition duration-300">Features</Link></li>
            <li><Link to="/testimonials" className="block hover:text-gray-300 transition duration-300">Testimonials</Link></li>
            <li><Link to="/contact" className="block hover:text-gray-300 transition duration-300">Contact</Link></li>
            {/* Show Sign In / Sign Up in the mobile menu */}
            {auth.currentUser ? (
              <li>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-300 text-white"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300 text-white">Log In</button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition duration-300 text-white">Sign Up</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
