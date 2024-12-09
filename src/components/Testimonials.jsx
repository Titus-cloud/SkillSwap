import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'Web Developer',
      testimonial: 'SkillSwap has been a game-changer for me. I’ve learned so much and met amazing people!',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jane Smith',
      position: 'Graphic Designer',
      testimonial: 'The community here is so welcoming! I found great mentors who helped me improve my skills.',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'Alex Johnson',
      position: 'Project Manager',
      testimonial: 'The platform is easy to use, and I’ve made incredible connections that have boosted my career.',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <section className="testimonials bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-16">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
