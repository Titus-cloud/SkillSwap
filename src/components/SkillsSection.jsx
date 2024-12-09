import React, { useState } from 'react';
// import SkillsCategory from '../components/SkillCategory';


const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transform transition-all">
      <img src={skill.icon} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </div>
  );
};

const SkillsCategory = ({ category, searchQuery }) => {
  const filteredSkills = category.skills.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
      <p className="text-lg text-gray-600 mb-6">{category.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))
        ) : (
          <p className="text-gray-500">No skills found.</p>
        )}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Web Development',
      description: 'Master the skills to build websites and web applications.',
      skills: [
        { name: 'HTML', description: 'The structure of web pages.', icon: 'https://via.placeholder.com/64' },
        { name: 'CSS', description: 'Styling web pages.', icon: 'https://via.placeholder.com/64' },
        { name: 'JavaScript', description: 'Making websites interactive.', icon: 'https://via.placeholder.com/64' },
        { name: 'React', description: 'Building dynamic user interfaces.', icon: 'https://via.placeholder.com/64' },
        { name: 'Node.js', description: 'Server-side JavaScript.', icon: 'https://via.placeholder.com/64' },
        { name: 'Vue.js', description: 'A progressive JavaScript framework.', icon: 'https://via.placeholder.com/64' },
        { name: 'Angular', description: 'A framework for building single-page applications.', icon: 'https://via.placeholder.com/64' },
        { name: 'TypeScript', description: 'JavaScript with static types.', icon: 'https://via.placeholder.com/64' },
        { name: 'Bootstrap', description: 'Responsive design framework.', icon: 'https://via.placeholder.com/64' },
        { name: 'SASS', description: 'CSS preprocessor for better styling.', icon: 'https://via.placeholder.com/64' },
        { name: 'Gatsby', description: 'A React-based framework for building fast websites.', icon: 'https://via.placeholder.com/64' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework.', icon: 'https://via.placeholder.com/64' },
      ],
    },
    {
      name: 'Data Science',
      description: 'Learn to analyze and interpret complex data.',
      skills: [
        { name: 'Python', description: 'A powerful language for data analysis.', icon: 'https://via.placeholder.com/64' },
        { name: 'R', description: 'A language for statistical computing.', icon: 'https://via.placeholder.com/64' },
        { name: 'Machine Learning', description: 'Making predictions using data.', icon: 'https://via.placeholder.com/64' },
        { name: 'Deep Learning', description: 'Advanced machine learning techniques.', icon: 'https://via.placeholder.com/64' },
        { name: 'Pandas', description: 'Data manipulation library in Python.', icon: 'https://via.placeholder.com/64' },
        { name: 'NumPy', description: 'Numerical computation library for Python.', icon: 'https://via.placeholder.com/64' },
        { name: 'SQL', description: 'Database query language.', icon: 'https://via.placeholder.com/64' },
        { name: 'Big Data', description: 'Handling and processing large datasets.', icon: 'https://via.placeholder.com/64' },
        { name: 'Tableau', description: 'Data visualization tool.', icon: 'https://via.placeholder.com/64' },
        { name: 'Power BI', description: 'Microsoft’s business analytics tool.', icon: 'https://via.placeholder.com/64' },
        { name: 'Hadoop', description: 'Framework for processing large datasets in distributed computing.', icon: 'https://via.placeholder.com/64' },
        { name: 'Apache Spark', description: 'Open-source unified analytics engine for big data processing.', icon: 'https://via.placeholder.com/64' },
      ],
    },
    {
      name: 'Mobile Development',
      description: 'Build applications for mobile platforms.',
      skills: [
        { name: 'React Native', description: 'Build mobile apps using JavaScript and React.', icon: 'https://via.placeholder.com/64' },
        { name: 'Swift', description: 'Programming language for iOS apps.', icon: 'https://via.placeholder.com/64' },
        { name: 'Kotlin', description: 'Programming language for Android apps.', icon: 'https://via.placeholder.com/64' },
        { name: 'Flutter', description: 'UI toolkit for building natively compiled applications.', icon: 'https://via.placeholder.com/64' },
        { name: 'Xcode', description: 'Development environment for macOS and iOS.', icon: 'https://via.placeholder.com/64' },
        { name: 'Android Studio', description: 'Integrated development environment for Android.', icon: 'https://via.placeholder.com/64' },
        { name: 'Dart', description: 'Programming language for Flutter.', icon: 'https://via.placeholder.com/64' },
        { name: 'Firebase', description: 'Backend as a service for mobile apps.', icon: 'https://via.placeholder.com/64' },
        { name: 'API Development', description: 'Building APIs for mobile apps.', icon: 'https://via.placeholder.com/64' },
        { name: 'Material Design', description: 'Google’s design language for mobile apps.', icon: 'https://via.placeholder.com/64' },
        { name: 'Xamarin', description: 'Cross-platform mobile development using C#.', icon: 'https://via.placeholder.com/64' },
      ],
    },
    {
      name: 'Cloud Computing',
      description: 'Master the world of cloud infrastructure and services.',
      skills: [
        { name: 'AWS', description: 'Amazon Web Services for cloud infrastructure.', icon: 'https://via.placeholder.com/64' },
        { name: 'Azure', description: 'Microsoft’s cloud platform.', icon: 'https://via.placeholder.com/64' },
        { name: 'Google Cloud', description: 'Google’s cloud infrastructure service.', icon: 'https://via.placeholder.com/64' },
        { name: 'Docker', description: 'Containerization technology.', icon: 'https://via.placeholder.com/64' },
        { name: 'Kubernetes', description: 'Container orchestration system.', icon: 'https://via.placeholder.com/64' },
        { name: 'Cloud Security', description: 'Securing cloud infrastructure.', icon: 'https://via.placeholder.com/64' },
        { name: 'Terraform', description: 'Infrastructure as code tool for cloud management.', icon: 'https://via.placeholder.com/64' },
        { name: 'CloudFormation', description: 'Amazon’s infrastructure as code tool.', icon: 'https://via.placeholder.com/64' },
        { name: 'CI/CD', description: 'Continuous integration and delivery.', icon: 'https://via.placeholder.com/64' },
        { name: 'Serverless Computing', description: 'Deploy code without managing servers.', icon: 'https://via.placeholder.com/64' },
        { name: 'Jenkins', description: 'Automation server for continuous integration.', icon: 'https://via.placeholder.com/64' },
      ],
    },
    {
      name: 'Cybersecurity',
      description: 'Protect data and systems from cyber threats.',
      skills: [
        { name: 'Ethical Hacking', description: 'Identifying vulnerabilities in systems.', icon: 'https://via.placeholder.com/64' },
        { name: 'Network Security', description: 'Securing network infrastructure.', icon: 'https://via.placeholder.com/64' },
        { name: 'Penetration Testing', description: 'Testing systems for security flaws.', icon: 'https://via.placeholder.com/64' },
        { name: 'Cryptography', description: 'Secure communication through encryption.', icon: 'https://via.placeholder.com/64' },
        { name: 'Firewalls', description: 'Filtering and controlling network traffic.', icon: 'https://via.placeholder.com/64' },
        { name: 'SIEM', description: 'Security information and event management.', icon: 'https://via.placeholder.com/64' },
        { name: 'SOC Operations', description: 'Security Operations Center management.', icon: 'https://via.placeholder.com/64' },
        { name: 'Incident Response', description: 'Managing and responding to security incidents.', icon: 'https://via.placeholder.com/64' },
        { name: 'Malware Analysis', description: 'Analyzing malicious software to understand its behavior.', icon: 'https://via.placeholder.com/64' },
        { name: 'Risk Management', description: 'Identifying and mitigating risks in systems.', icon: 'https://via.placeholder.com/64' },
      ],
    },
  ];
  

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Browse Skills by Category</h2>
        
        {/* Search Input Field */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for a skill (e.g., Python)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 px-4 rounded-md text-gray-800 w-full max-w-md mx-auto shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 static top-0 left-0"
          />
        </div>

        {/* Render categories */}
        {categories.map((category, index) => (
          <SkillsCategory key={index} category={category} searchQuery={searchQuery} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
