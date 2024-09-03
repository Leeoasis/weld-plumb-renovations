import React, { useEffect, useRef } from 'react';
import Services from '../../assets/images/Plumbing.jpeg';
import '../../styles/recentProjects.css';

// Image Imports
// Mokopane
import MokImage1 from '../../assets/images/projects/Mokopane/mok1.jpg';

// Woodprut Wildlife Estate
import WoodImage1 from '../../assets/images/projects/wildEstate/wild4.jpg';

// Lephalale
import LepImage1 from '../../assets/images/projects/Lephalale/lep2.jpg';

const RecentProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8 animate-slide-in-up">
          Recent Projects
        </h2>
        <p className="text-lg text-center text-white mb-12">
          Take a look at some of our most recent and impactful projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up">
            <img
              src={MokImage1}
              alt="first project"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Mokopane</h3>
            <p>We successfully completed a residential construction project in Mokopane, where we built a modern, durable house from the ground up. Our team managed every aspect of the build, from planning and design to construction and final touches. The result is a beautiful, functional home that meets the client's specifications and stands as a testament to our commitment to quality and attention to detail.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-100">
            <img
              src={WoodImage1}
              alt="Project 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Woodprut Wildlife Estate</h3>
            <p>We recently completed a roofing project in Woodprut Wildlife Estate, where we provided expert roofing services for a residential property. Our team ensured that the roofing was not only durable and weather-resistant but also aesthetically aligned with the natural surroundings of the estate. The result is a robust and visually appealing roof that complements the beauty of the wildlife estate while providing long-lasting protection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-200">
            <img
              src={LepImage1}
              alt="Project 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Lephalale</h3>
            <p>We successfully completed the construction of a new house in Lephalale. Our team handled everything from the initial design phase to the final construction, ensuring that every detail met the highest standards of quality. The result is a beautiful, sturdy home that perfectly suits the client's needs and enhances the local landscape of Lephalale.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="/projects" className="inline-block bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300">
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
