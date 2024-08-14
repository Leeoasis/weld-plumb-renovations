import React from 'react';
import HeroPage from './homeComponents/hero';
import ChooseUs from './homeComponents/chooseUs'
import HomeServices from './homeComponents/services'
import RecentProjects from './homeComponents/recentProjects';
import Testimonial from './homeComponents/testimonial';
import ContactUs from './homeComponents/contact'

const HomePage = () => {
  return (
    <div>
      <HeroPage />

      {/* Why Go With Us Section */}
        <ChooseUs />

      {/* Our Services Section */}
        <HomeServices />

      {/* Recent Projects Section */}
        <RecentProjects />

      {/* Testimonials Section */}
        <Testimonial />

      {/* Contact Section */}
        <ContactUs />
     </div>
  );
};

export default HomePage;
