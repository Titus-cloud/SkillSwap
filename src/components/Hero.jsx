import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white py-20 px-6 text-center md:px-12">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-semibold mb-4 leading-tight tracking-wide">
          Enhance Your Skills, Share Your Expertise
        </h1>
        <p className="text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          Join a community where you can learn, teach, and grow together. Browse skills or offer your expertise.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/skills" // Link to the skills page
            className="bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Find Skills to Learn
          </Link>
          <button className="bg-green-600 px-6 py-3 text-white rounded-lg hover:bg-green-700 transition ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400">
            Offer Your Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
