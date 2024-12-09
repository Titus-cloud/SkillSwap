import React from 'react';

const About = () => {
  return (
    <section className="about-us bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
          About SkillSwap
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          SkillSwap is an innovative platform designed to foster knowledge sharing, skill development, and community building.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              We empower individuals by providing a platform for skill exchange. Whether you're looking to learn or teach, SkillSwap connects people with shared passions for personal and professional growth.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Our community-driven approach ensures that SkillSwap is a place for everyone, no matter your experience level. Join us and be part of a movement that promotes mutual growth and knowledge sharing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
