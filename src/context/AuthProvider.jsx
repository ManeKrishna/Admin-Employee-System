// src/context/AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react'
import { 
  getAllEmployees, 
  subscribeToEmployees, 
  initializeFirestoreData,
  updateEmployee 
} from '../services/firebaseServices';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    const initializeData = async () => {
      try {
        // Initialize Firestore with default data if needed
        await initializeFirestoreData();
        
        // Set up real-time listener
        unsubscribe = subscribeToEmployees((employees) => {
          setUserData(employees);
          setLoading(false);
        });

      } catch (error) {
        console.error('Error initializing data:', error);
        setLoading(false);
      }
    };

    initializeData();

    // Cleanup listener on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Function to update employee data in Firestore
  const updateUserData = async (updatedEmployees) => {
    try {
      // Update each modified employee in Firestore
      const updatePromises = updatedEmployees.map(employee => 
        updateEmployee(employee.id, employee)
      );
      
      await Promise.all(updatePromises);
      
      // Local state will be updated automatically via the real-time listener
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={[userData, updateUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider