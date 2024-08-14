import React from "react";
import Services from "../../assets/images/Plumbing.jpeg";
import "../../styles/testimonials.css"

const Testimonial = () => {
    return (
        <section className="relative bg-gray-100 py-20" style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-8 text-white animate-text-glow">What Our Clients Say</h2>
                <p className="text-lg text-center mb-12 text-white">Hear from our satisfied clients about their experiences with us.</p>
                <div className="flex flex-col md:flex-row gap-12 justify-center">
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center mb-4">
                            <img src="https://via.placeholder.com/100" alt="Client 1" className="w-16 h-16 rounded-full mr-4 animate-image-bounce" />
                            <h3 className="text-xl font-semibold text-orange-700">Client Name</h3>
                        </div>
                        <p className="text-lg mb-4">"Cruzy Projects exceeded our expectations. The team was professional, and the results were exceptional. Highly recommended!"</p>
                    </div>
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center mb-4">
                            <img src="https://via.placeholder.com/100" alt="Client 2" className="w-16 h-16 rounded-full mr-4 animate-image-bounce" />
                            <h3 className="text-xl font-semibold text-orange-700">Client Name</h3>
                        </div>
                        <p className="text-lg mb-4">"Outstanding service and quality. The project was completed on time and on budget. We'll definitely use them again."</p>
                    </div>
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md transform transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center mb-4">
                            <img src="https://via.placeholder.com/100" alt="Client 3" className="w-16 h-16 rounded-full mr-4 animate-image-bounce" />
                            <h3 className="text-xl font-semibold text-orange-700">Client Name</h3>
                        </div>
                        <p className="text-lg mb-4">"The team at Cruzy Projects did an incredible job with our tiling. Their attention to detail was impressive."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
