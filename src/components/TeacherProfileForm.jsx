import { useState } from "react";

// Input Component for reusability
const InputField = ({ label, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const TeacherProfileForm = ({ addProfile }) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled (Simple Validation)
    if (!name || !skill || !description || !price || !availability) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Create profile object
    const profile = {
      name,
      skill,
      description,
      price,
      availability,
    };

    // Simulate saving the profile
    setTimeout(() => {
      addProfile(profile);
      setLoading(false);

      // Reset form
      setName("");
      setSkill("");
      setDescription("");
      setPrice("");
      setAvailability("");
      alert("Profile created successfully!");
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Create Teacher Profile</h2>

      <InputField
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <InputField
        label="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        required
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <InputField
        label="Price (e.g., $50/hour)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <InputField
        label="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        required
      />

      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-lg text-white ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Create Profile"}
      </button>
    </form>
  );
};

export default TeacherProfileForm;
