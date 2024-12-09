import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Ensure Firestore is imported
import { doc, getDoc } from 'firebase/firestore';

const Home = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setName(docSnap.data().name);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome, {name || 'User'}!</h1>
      </div>
    </div>
  );
};

export default Home;
