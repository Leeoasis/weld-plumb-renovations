import React from "react";
import WhyImage from "../../assets/images/contactimage.jpeg";

const ContactUs = () => {
    return (
        <section className="relative bg-gray-100 py-20" style={{ backgroundImage: `url(${WhyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-olive-green-gradient opacity-60"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-white animate-slide-in-up">Get In Touch</h2>
                    <p className="text-lg mb-6 text-white">Have any questions or want to start a project with us? Reach out today!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-700" />
                                <input type="email" placeholder="Email" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-700" />
                            </div>
                            <textarea placeholder="Message" className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-olive-700"></textarea>
                            <button type="submit" className="bg-olive-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-olive-600 transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="bg-olive-800 text-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Contact Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 text-olive-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v12l8 4V9l-8-4z"/></svg>
                                <p>1234 Address St, City, Country</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 text-olive-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.45 0-2.8-.38-4-1.03L14.97 10c.66 1.2 1.03 2.55 1.03 4 0 3.31-2.69 6-6 6zm-3.69-4.47c-.14-.56-.31-1.1-.52-1.6L16.31 7.97c.59.58 1.03 1.29 1.22 2.08L8.31 15.53z"/></svg>
                                <p>(123) 456-7890</p>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 text-olive-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v12l8 4V9l-8-4z"/></svg>
                                <p>info@company.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;
