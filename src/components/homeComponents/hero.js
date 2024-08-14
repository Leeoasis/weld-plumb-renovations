import React from 'react';
import Hero from '../../assets/videos/hero.mp4';
import '../../styles/HeroPage.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HeroPage = () => {
  return (
    <section className="relative text-white h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={Hero}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-olive-900 via-olive-800 to-transparent opacity-80 z-10"></div>
      <div className="relative z-20 text-center px-4 max-w-3xl animate-floaty">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 px-4 py-6 bg-opacity-70 bg-black rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in-down text-shadow">
            Welcome to Cruzy Projects
          </h1>
          <p className="text-lg md:text-xl mb-6 animate-slide-in-up text-shadow">
            At Cruzy Projects, we deliver exceptional plumbing, roofing, tiling, and waterproofing solutions designed to enhance your property's durability and aesthetic appeal. Our expert team utilizes the latest technology and industry best practices to ensure high-quality results and customer satisfaction.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-semibold py-3 px-6 rounded shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded shadow-lg transform transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="mt-8 text-lg md:text-xl">
            <p>Discover how our expertise can make a difference. Contact us for a consultation or explore our services.</p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 z-20 animate-bounce animate-floaty">
        <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroPage;
