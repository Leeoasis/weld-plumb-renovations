import React from "react";
import Services from "../../assets/images/Plumbing.jpeg";
import { FaWrench, FaHome, FaThLarge, FaTint } from "react-icons/fa";
import "../../styles/homeServices.css";

const HomeServices = () => {
    return (
        <section className="relative py-20" style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-8 text-white animate-slide-in-up">Our Services</h2>
                <p className="text-lg text-center mb-12 text-white">Explore our range of services designed to meet all your needs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 animate-floating">
                        <div className="flex items-center mb-4">
                            <FaWrench size={32} className="text-orange-700 mr-4" />
                            <h3 className="text-2xl font-semibold text-orange-700">Plumbing</h3>
                        </div>
                        <p>Expert plumbing solutions for residential and commercial properties, ensuring reliability and efficiency.</p>
                    </div>
                    <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 animate-floating">
                        <div className="flex items-center mb-4">
                            <FaHome size={32} className="text-orange-700 mr-4" />
                            <h3 className="text-2xl font-semibold text-orange-700">Roofing</h3>
                        </div>
                        <p>High-quality roofing services to protect your property and enhance its value.</p>
                    </div>
                    <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 animate-floating">
                        <div className="flex items-center mb-4">
                            <FaThLarge size={32} className="text-orange-700 mr-4" />
                            <h3 className="text-2xl font-semibold text-orange-700">Tiling</h3>
                        </div>
                        <p>Professional tiling services for a sleek and modern look in any space.</p>
                    </div>
                    <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 animate-floating">
                        <div className="flex items-center mb-4">
                            <FaTint size={32} className="text-orange-700 mr-4" />
                            <h3 className="text-2xl font-semibold text-orange-700">Waterproofing</h3>
                        </div>
                        <p>Effective waterproofing solutions to safeguard your property from water damage.</p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a href="#services" className="inline-block bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300">
                        See More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
