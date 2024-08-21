import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "../styles/projectsPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

// Import project images
import ProjectImage from "../assets/images/projects.jpg";
import Project1_1 from "../assets/images/roofing.jpeg";
import Project1_2 from "../assets/images/roofing.jpeg";
import Project1_3 from "../assets/images/roofing.jpeg";
import Project2_1 from "../assets/images/roofing.jpeg";
import Project2_2 from "../assets/images/roofing.jpeg";
import Project2_3 from "../assets/images/roofing.jpeg";
import Project3_1 from "../assets/images/roofing.jpeg";
import Project3_2 from "../assets/images/roofing.jpeg";
import Project3_3 from "../assets/images/roofing.jpeg";
import Project4_1 from "../assets/images/roofing.jpeg";
import Project4_2 from "../assets/images/roofing.jpeg";
import Project4_3 from "../assets/images/roofing.jpeg";

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
            title: "Luxury Villa Renovation",
            images: [Project1_1, Project1_2, Project1_3],
            description: "A complete renovation of a luxury villa, including modern interiors and exteriors.",
        },
        {
            id: 2,
            title: "Commercial Complex",
            images: [Project2_1, Project2_2, Project2_3],
            description: "Development of a commercial complex with state-of-the-art facilities and sustainable design.",
        },
        {
            id: 3,
            title: "Modern Office Space",
            images: [Project3_1, Project3_2, Project3_3],
            description: "Design and build of a modern office space with a focus on productivity and aesthetics.",
        },
        {
            id: 4,
            title: "Residential Apartment",
            images: [Project4_1, Project4_2, Project4_3],
            description: "Construction of a residential apartment complex with high-end amenities.",
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

