import { useState, useEffect } from 'react';
import TeacherProfileForm from '../components/TeacherProfileForm';

const BrowseSkills = () => {
  const [profiles, setProfiles] = useState([]);

  // Load profiles from localStorage on initial render
  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(storedProfiles);
  }, []);

  // Add a new profile to the list
  const addProfile = (newProfile) => {
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  return (
    <div>
      <TeacherProfileForm addProfile={addProfile} />
      
      <h2 className="text-xl font-bold mt-4">Browse Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {profiles.map((profile, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md space-y-2">
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm text-gray-600">Skill: {profile.skill}</p>
            <p>{profile.description}</p>
            <p className="font-bold">Price: {profile.price}</p>
            <p className="text-sm text-gray-500">Availability: {profile.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseSkills;
