import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-2">Cruzy Projects</h5>
            <p>© 2024 All rights reserved.</p>
            <p className="mt-2">2 Settler's drive, Edgemead</p>
            <p>Phone: +27683880693</p>
            <p>Email: info@weldplumbrenovations.co.za</p>
          </div>
          <div className="mt-6 md:mt-0 text-center">
            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/services" className="hover:text-gray-400">Services</a></li>
              <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0 text-center md:text-right">
            <h5 className="text-xl font-bold mb-2">Follow Us</h5>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">Designed by Leslie Gudo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
