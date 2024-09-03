import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import '../styles/contactPage.css';
import WhyImage from '../assets/images/contactimage.jpeg';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
        <div className="contact-page">
            {/* Hero Section */}
            <section
                className="relative bg-gray-100 py-20" style={{ backgroundImage: `url(${WhyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                            <div className="absolute inset-0 bg-olive-green-gradient opacity-60"></div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInUp">
                        Get in Touch
                    </h1>
                    <p className="text-xl mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                        We would love to hear from you! Whether you have a question or need assistance, feel free to reach out to us.
                    </p>
                </div>
            </section>

            {/* Contact Form and Details */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="contact-form w-full lg:w-1/2 shadow-lg rounded-lg p-8 bg-white animate-slow-float">
                        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                            </div>
                            <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="contact-details w-full lg:w-1/2 shadow-lg rounded-lg p-8 bg-white animate-slow-float">
                        <h2 className="text-3xl font-semibold mb-6">Contact Details</h2>
                        <p className="mb-4"><strong>Address:</strong> 2 Settler's drive, Edgemead</p>
                        <p className="mb-4"><strong>Phone:</strong> +27683880693</p>
                        <p className="mb-4"><strong>Email:</strong> info@weldplumbrenovations.co.za</p>
                        <div id="map" className="w-full h-64 rounded-lg mt-4">
                            {/* Embed Google Map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.490038741079!2d-122.08092208469228!3d37.3886306798281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb61f611334e7%3A0xb75b40cc0162626f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1635236437225!5m2!1sen!2sus"
                                style={{
                                  border: 0, width: '100%', height: '100%', borderRadius: '8px',
                                }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  );
};

export default ContactPage;
