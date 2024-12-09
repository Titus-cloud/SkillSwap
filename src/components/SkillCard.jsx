import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="border p-4 mb-4">
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      <p>Rating: {skill.rating}</p>
      <p>Price: {skill.price}</p>
    </div>
  );
};

export default SkillCard;
