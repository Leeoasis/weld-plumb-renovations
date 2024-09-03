import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "../styles/projectsPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

// Import project images
import ProjectImage from "../assets/images/projects.jpg";

// Mokopane
import MokImage1 from "../assets/images/projects/Mokopane/mok1.jpg"
import MokImage2 from "../assets/images/projects/Mokopane/mok2.jpg"
import MokImage3 from "../assets/images/projects/Mokopane/mok3.jpg"
import MokImage4 from "../assets/images/projects/Mokopane/mok4.jpg"
import MokImage5 from "../assets/images/projects/Mokopane/mok5.jpg"
import MokImage6 from "../assets/images/projects/Mokopane/mok6.jpg"

// Lephalale
import LepImage1 from "../assets/images/projects/Lephalale/lep1.jpg"
import LepImage2 from "../assets/images/projects/Lephalale/lep2.jpg"
import LepImage3 from "../assets/images/projects/Lephalale/lep3.jpg"

//Woodprut Wildlife Estate
import WoodImage1 from "../assets/images/projects/wildEstate/wild1.jpg"
import WoodImage2 from "../assets/images/projects/wildEstate/wild2.jpg"
import WoodImage3 from "../assets/images/projects/wildEstate/wild3.jpg"
import WoodImage4 from "../assets/images/projects/wildEstate/wild4.jpg"
import WoodImage5 from "../assets/images/projects/wildEstate/wild5.jpg"
import WoodImage6 from "../assets/images/projects/wildEstate/wild6.jpg"
import WoodImage7 from "../assets/images/projects/wildEstate/wild7.jpg"
import WoodImage8 from "../assets/images/projects/wildEstate/wild8.jpg"
import WoodImage9 from "../assets/images/projects/wildEstate/wild9.jpg"

// Ealysras 
import EalysrasImage1 from "../assets/images/projects/Ras/ras1.jpg"
import EalysrasImage2 from "../assets/images/projects/Ras/ras2.jpg"

// Gyani Limpopo
import GyaniImage1 from "../assets/images/projects/Gyani/gyan1.jpg"
import GyaniImage2 from "../assets/images/projects/Gyani/gyan2.jpg"
import GyaniImage3 from "../assets/images/projects/Gyani/gyan3.jpg"
import GyaniImage4 from "../assets/images/projects/Gyani/gyan4.jpg"
import GyaniImage5 from "../assets/images/projects/Gyani/gyan5.jpg"

// Capetown
import CapetownImage1 from "../assets/images/projects/Capetown/cape1.jpg"

const ProjectsPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const projects = [
        {
            id: 1,
            title: "Mokopane House Project",
            images: [MokImage2 ,MokImage1,MokImage3, MokImage4, MokImage5, MokImage6],
            description: "We successfully completed a residential construction project in Mokopane, where we built a modern, durable house from the ground up. Our team managed every aspect of the build, from planning and design to construction and final touches. The result is a beautiful, functional home that meets the client's specifications and stands as a testament to our commitment to quality and attention to detail.",
        },
        {
            id: 2,
            title: "Lephalale House Project",
            images: [LepImage1, LepImage2, LepImage3],
            description: "We successfully completed the construction of a new house in Lephalale. Our team handled everything from the initial design phase to the final construction, ensuring that every detail met the highest standards of quality. The result is a beautiful, sturdy home that perfectly suits the client's needs and enhances the local landscape of Lephalale.",
        },
        {
            id: 3,
            title: "Woodprut Wildlife Estate Roofing",
            images: [WoodImage1, WoodImage2, WoodImage3, WoodImage4, WoodImage5, WoodImage6, WoodImage7, WoodImage8, WoodImage9],
            description: "We recently completed a roofing project in Woodprut Wildlife Estate, where we provided expert roofing services for a residential property. Our team ensured that the roofing was not only durable and weather-resistant but also aesthetically aligned with the natural surroundings of the estate. The result is a robust and visually appealing roof that complements the beauty of the wildlife estate while providing long-lasting protection.",
        },
        {
            id: 4,
            title: "Ealysras House Project",
            images: [EalysrasImage1, EalysrasImage2],
            description: "We recently completed the construction of a residential property in Ealysras. Our team took charge of the entire process, from planning and design to the final construction stages, ensuring that the house was built to the highest standards. The end result is a stylish and durable home that perfectly fits the client's vision and enhances the beauty of Ealysras.",
        }, {
            id: 5,
            title: "Capetown House Project",
            images: [CapetownImage1],
            description: "We also completed a residential construction project in Cape Town. From concept to completion, our team delivered a high-quality home that combines modern design with practical functionality. The finished property not only meets the client's specific needs but also adds to the architectural beauty of the Cape Town area.",
        }, {
            id: 6,
            title: "Gyani Limpopo Housing Project",
            images: [GyaniImage1, GyaniImage2, GyaniImage3, GyaniImage4, GyaniImage5],
            description: "We recently completed the construction of a new home in Gyani, Limpopo. Our team managed the project from the initial design phase through to the final build, ensuring that the house was crafted with precision and care. The result is a sturdy and elegant home that meets the client’s expectations and enhances the landscape of Gyani.",
        },
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const closeGallery = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-page">
            {/* Hero Section */}
            <section
                className="relative py-24 bg-cover bg-center animate__animated animate__fadeIn"
                style={{ backgroundImage: `url(${ProjectImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-5xl font-bold text-center text-white animate__animated animate__fadeInUp mb-8">
                        Our Projects
                    </h1>
                    <p className="text-xl text-center text-white mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                        Take a look at some of the projects we've completed. Our commitment to quality and excellence
                        is reflected in every project we undertake.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="project-card shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                onClick={() => handleProjectClick(project)}
                                data-aos="fade-up"
                            >
                                <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover" />
                                <div className="p-6 bg-white">
                                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                    <span className="text-orange-600 hover:text-orange-700 font-semibold mt-4 inline-block">
                                        View Gallery
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <button
                            className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-700"
                            onClick={closeGallery}
                        >
                            &times;
                        </button>
                        <Carousel infiniteLoop useKeyboardArrows showThumbs={false}>
                            {selectedProject.images.map((image, index) => (
                                <div key={index} className="h-64 md:h-80">
                                    <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </Carousel>
                        <div className="p-6">
                            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <button
                                onClick={closeGallery}
                                className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
                            >
                                Close Gallery
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-8 animate__animated animate__pulse animate__infinite">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-12">
                        Let's work together to create something amazing. Contact us today to discuss your project and get
                        a free quote.
                    </p>
                    <a
                        href="/contact"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out"
                    >
                        Get a Free Quote
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;

