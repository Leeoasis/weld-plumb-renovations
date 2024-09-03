import React, { useEffect, useRef } from "react";
import { FaWrench, FaPaintRoller, FaHammer, FaTools } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "../styles/servicesPage.css";

// Import images
import PlumbingImage from "../assets/images/Plumbing.jpeg";
import WeldingImage from "../assets/images/Welding.jpeg";
import PaintingImage from "../assets/images/painting.jpeg";
import RenovationImage from "../assets/images/Renovation.jpeg";
import WhyImage from "../assets/images/contactimage.jpeg";

const ServicesPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    }, []);

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
        className="services-page"
        >
            {/* Hero Section */}
            <section className="relative py-20 bg-cover bg-center animate__animated animate__fadeIn" style={{ backgroundImage: `url(${PlumbingImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl font-bold text-center text-white animate__animated animate__fadeInUp mb-8">Our Comprehensive Services</h1>
                    <p className="text-xl text-center text-white mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                        We provide a wide range of services tailored to meet your specific needs. Whether it's plumbing, welding, painting, or renovations, we deliver quality workmanship with a commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-orange-700 mb-16 animate__animated animate__zoomIn">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-left">
                            <FaWrench size={48} className="service-icon" />
                            <h3 className="service-title">Plumbing</h3>
                            <p className="service-description">
                                Our expert plumbing services cover everything from leak repairs to full installations. We ensure your plumbing systems are efficient, reliable, and up to code.
                            </p>
                        </div>
                        <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-right">
                            <FaTools size={48} className="service-icon" />
                            <h3 className="service-title">Welding</h3>
                            <p className="service-description">
                                Offering precise welding services for structural, industrial, and decorative projects. We prioritize strength and durability in every weld.
                            </p>
                        </div>
                        <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-left">
                            <FaPaintRoller size={48} className="service-icon" />
                            <h3 className="service-title">Painting</h3>
                            <p className="service-description">
                                Transform your space with our professional painting services. We offer interior and exterior painting with attention to detail and a flawless finish.
                            </p>
                        </div>
                        <div className="service-card transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl p-6 rounded-lg" data-aos="flip-right">
                            <FaHammer size={48} className="service-icon" />
                            <h3 className="service-title">Renovations</h3>
                            <p className="service-description">
                                Whether it's a single room or a full property overhaul, our renovation services are designed to enhance your space with modern designs and quality craftsmanship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Service Details Section */}            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-orange-700 mb-16 animate__animated animate__fadeInUp">Service Details</h2>
                    <div className="service-details max-w-6xl mx-auto px-4">
                        <div className="service-detail flex items-center mb-12 shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
                            <img src={PlumbingImage} alt="Plumbing Details" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
                            <div className="ml-8 max-w-md space-y-4">
                                <h3 className="text-3xl font-semibold mb-4">Plumbing Services</h3>
                                <p>
                                    Our plumbing services include emergency repairs, installations, and maintenance. We handle everything from fixing leaks and unclogging drains to installing new plumbing systems. Our team is available 24/7 for emergency services.
                                </p>
                            </div>
                        </div>
                        <div className="service-detail flex items-center mb-12 flex-row-reverse shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
                            <img src={RenovationImage} alt="Renovation Details" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
                            <div className="ml-8 max-w-md space-y-4">
                                <h3 className="text-3xl font-semibold mb-4">Renovation Services</h3>
                                <p>
                                    Our renovation services include everything from minor updates to full-scale remodeling. We work with you to design and build spaces that are functional, beautiful, and tailored to your needs.
                                </p>
                            </div>
                        </div>
                        <div className="service-detail flex items-center mb-12 shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
                            <img src={PaintingImage} alt="Painting Details" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
                            <div className="ml-8 max-w-md space-y-4">
                                <h3 className="text-3xl font-semibold mb-4">Painting Services</h3>
                                <p>
                                    We offer interior and exterior painting services for both residential and commercial properties. Our team works with you to choose the right colors and finishes that will enhance the beauty and value of your property.
                                </p>
                            </div>
                        </div>
                        <div className="service-detail flex items-center mb-12 flex-row-reverse shadow-md rounded-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
                            <img src={WeldingImage} alt="Welding Details" className="w-1/3 h-64 object-cover rounded-lg float-animation animate-bounce" />
                            <div className="ml-8 max-w-md space-y-4">
                                <h3 className="text-3xl font-semibold mb-4">Welding Services</h3>
                                <p>
                                    Our welding services cover a wide range of needs, from simple repairs to custom fabrication. We work with various materials, including steel, aluminum, and iron, to create strong and lasting welds.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative bg-gray-100 py-20" style={{ backgroundImage: `url(${WhyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-olive-green-gradient opacity-60"></div>

                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8 animate__animated animate__fadeInDown">Ready to Start Your Project?</h2>
                    <p className="text-white text-lg mb-12 animate__animated animate__fadeInDown animate__delay-1s">
                        Contact us today to discuss your project and get a free quote.
                    </p>
                    <button className="px-6 py-3 text-lg font-semibold text-orange-700 bg-white rounded-lg animate__animated animate__pulse animate__infinite">
                        Get a Quote
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
