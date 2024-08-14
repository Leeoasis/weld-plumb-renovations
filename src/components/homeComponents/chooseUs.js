import React, { useEffect, useRef } from "react";
import { FaToolbox, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import WhyImage from "../../assets/images/choose.jpeg";
import "../../styles/chooseUs.css";

const ChooseUs = () => {
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
            ref={sectionRef}
            className="relative bg-gray-100 py-20 overflow-hidden"
            style={{ backgroundImage: `url(${WhyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-olive-green-gradient opacity-80 z-0"></div>
            <div className="container mx-auto px-6 relative z-10 transition-opacity duration-1000">
                <h2 className="text-4xl font-bold text-center mb-8 text-white slide-up animate-pulse">Our Commitment to Excellence</h2>
                <p className="text-lg text-center mb-12 text-white slide-up">Discover what sets us apart and why our clients trust us.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-95 hover:scale-105 card-hover">
                        <div className="flex items-center mb-4">
                            <FaToolbox size={48} className="text-red-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-red-500">Skilled Professionals</h3>
                        </div>
                        <p>Our seasoned experts excel in plumbing, roofing, tiling, and waterproofing, delivering exceptional results every time.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-95 hover:scale-105 card-hover">
                        <div className="flex items-center mb-4">
                            <FaLightbulb size={48} className="text-yellow-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-yellow-500">Innovative Solutions</h3>
                        </div>
                        <p>We harness cutting-edge technology to craft tailored solutions that meet your specific needs, driving success.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 scale-95 hover:scale-105 card-hover">
                        <div className="flex items-center mb-4">
                            <FaHandsHelping size={48} className="text-green-500 mr-4" />
                            <h3 className="text-2xl font-semibold text-green-500">Customer First</h3>
                        </div>
                        <p>Your satisfaction is our priority. We offer personalized service, ensuring every detail aligns with your expectations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
