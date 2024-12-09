import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRout';
import Home from './components/Home';
import SkillsSection from './components/SkillsSection';
import TeacherProfileForm from './components/TeacherProfileForm';
import AddProfile from './components/AddProfile';

const App = () => {
  return (
    
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path='/teacher' element={<TeacherProfileForm addProfile={AddProfile}/>} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
   
  );
};

export default App;
