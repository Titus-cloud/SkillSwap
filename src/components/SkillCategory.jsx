import React from 'react';
import SkillCard from '../components/SkillCard';

const skills = [
  { id: 1, category: 'Design', name: 'Graphic Design', description: 'Create stunning visuals', rating: 4.5, price: '$40' },
  { id: 2, category: 'Development', name: 'Web Development', description: 'Build modern websites', rating: 5, price: '$60' },
  // Add more skills here
];

const SkillsCategory = ({ searchQuery }) => {
  const filteredSkills = skills.filter(skill => skill.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      {filteredSkills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsCategory;
