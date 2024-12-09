import React, { useState } from "react";
import TeacherProfileForm from "./TeacherProfileForm";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
    alert(`Profile for ${profile.name} has been successfully created!`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Teacher Profile Management</h1>
      <TeacherProfileForm addProfile={addProfile} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Profiles</h2>
        {profiles.map((profile, index) => (
          <div key={index} className="bg-gray-100 p-4 my-2 rounded shadow">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Skill:</strong> {profile.skill}</p>
            <p><strong>Description:</strong> {profile.description}</p>
            <p><strong>Price:</strong> {profile.price}</p>
            <p><strong>Availability:</strong> {profile.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
