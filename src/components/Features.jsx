import React from 'react';

const Features = () => {
  return (
    <section className="features bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-16">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="icon text-4xl text-green-600 mb-4">
              <i className="fas fa-user"></i> {/* Replace with your own icon */}
            </div>
            <h3 className="text-xl font-medium text-center mb-3">Skill Sharing</h3>
            <p className="text-gray-700 text-center">
              Share your skills with others and learn from a community of experts.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="icon text-4xl text-blue-600 mb-4">
              <i className="fas fa-chalkboard-teacher"></i> {/* Example icon */}
            </div>
            <h3 className="text-xl font-medium text-center mb-3">Learn & Grow</h3>
            <p className="text-gray-700 text-center">
              Find mentors and teachers to help you acquire new skills.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="icon text-4xl text-yellow-600 mb-4">
              <i className="fas fa-network-wired"></i> {/* Example icon */}
            </div>
            <h3 className="text-xl font-medium text-center mb-3">Connect & Collaborate</h3>
            <p className="text-gray-700 text-center">
              Collaborate with others to work on projects and improve your abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
