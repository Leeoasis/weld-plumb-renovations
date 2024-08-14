import React, { useEffect, useRef } from "react";
import Services from "../../assets/images/Plumbing.jpeg";
import "../../styles/recentProjects.css"

const RecentProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
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
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ backgroundImage: `url(${Services})`, backgroundSize: "cover", backgroundPosition: "center" }}
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
              src="https://via.placeholder.com/600x400"
              alt="Project 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Project Title 1</h3>
            <p>A brief description of the project showcasing the work done and the results achieved.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-100">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Project 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Project Title 2</h3>
            <p>A brief description of the project showcasing the work done and the results achieved.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out float-up delay-200">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Project 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">Project Title 3</h3>
            <p>A brief description of the project showcasing the work done and the results achieved.</p>
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
