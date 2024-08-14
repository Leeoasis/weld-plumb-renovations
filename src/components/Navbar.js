import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Determine if the link is active
  const isActive = (path) => location.pathname === path || (path === '/' && location.pathname === '/') ? 
    'bg-yellow-500 text-white border-2 border-yellow-500 py-2 px-4 rounded-md' : 
    'text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-md';

  return (
    <nav className="bg-orange-700 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-300">Cruzy Projects</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className={`nav-item ${isActive('/')}`}>Home</a>
          <a href="#services" className={`nav-item ${isActive('/#services')}`}>Services</a>
          <a href="#projects" className={`nav-item ${isActive('/#projects')}`}>Projects</a>
          <a href="#testimonials" className={`nav-item ${isActive('/#testimonials')}`}>Testimonials</a>
          <a href="#contact" className={`nav-item ${isActive('/#contact')}`}>Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 text-white z-50">
          <div className="flex flex-col items-center pt-16 space-y-6 relative">
            <button onClick={closeMenu} className="absolute top-4 right-4 text-white text-2xl">
              <FaTimes />
            </button>
            <a href="/" className={`block px-6 py-3 text-lg font-semibold rounded-md ${isActive('/')}`} onClick={closeMenu}>
              Home
            </a>
            <a href="#services" className={`block px-6 py-3 text-lg font-semibold rounded-md ${isActive('/#services')}`} onClick={closeMenu}>
              Services
            </a>
            <a href="#projects" className={`block px-6 py-3 text-lg font-semibold rounded-md ${isActive('/#projects')}`} onClick={closeMenu}>
              Projects
            </a>
            <a href="#testimonials" className={`block px-6 py-3 text-lg font-semibold rounded-md ${isActive('/#testimonials')}`} onClick={closeMenu}>
              Testimonials
            </a>
            <a href="#contact" className={`block px-6 py-3 text-lg font-semibold rounded-md ${isActive('/#contact')}`} onClick={closeMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
