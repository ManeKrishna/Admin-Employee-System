// src/components/Debug/AdminDebugButton.jsx
// TEMPORARY: Add this to your LoginDo component to manually create admin
// Remove after admin is created successfully

import React, { useState } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

const AdminDebugButton = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const createAdmin = async () => {
    setLoading(true);
    setStatus('Creating admin...');
    
    try {
      // Check if admin exists
      const adminRef = doc(db, 'admin', 'A001');
      const adminSnap = await getDoc(adminRef);
      
      if (adminSnap.exists()) {
        setStatus('✓ Admin already exists!');
        console.log('Admin data:', adminSnap.data());
        setLoading(false);
        return;
      }
      
      // Create admin
      const adminData = {
        id: "A001",
        email: "admin@me.com",
        name: "Admin",
        password: "123"
      };
      
      await setDoc(adminRef, adminData);
      setStatus('✓ Admin created successfully!');
      console.log('Admin created:', adminData);
      
    } catch (error) {
      setStatus('❌ Error: ' + error.message);
      console.error('Error creating admin:', error);
    }
    
    setLoading(false);
  };

  const checkAdmin = async () => {
    setLoading(true);
    setStatus('Checking admin...');
    
    try {
      const adminRef = doc(db, 'admin', 'A001');
      const adminSnap = await getDoc(adminRef);
      
      if (adminSnap.exists()) {
        setStatus('✓ Admin exists: ' + JSON.stringify(adminSnap.data()));
        console.log('Admin data:', adminSnap.data());
      } else {
        setStatus('❌ Admin does not exist');
      }
    } catch (error) {
      setStatus('❌ Error: ' + error.message);
      console.error('Error checking admin:', error);
    }
    
    setLoading(false);
  };

  return (
    <div className='fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-purple-400 z-50'>
      <h3 className='text-white text-sm font-bold mb-2'>Debug: Admin Setup</h3>
      <div className='flex flex-col gap-2'>
        <button
          onClick={checkAdmin}
          disabled={loading}
          className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50'
        >
          Check Admin
        </button>
        <button
          onClick={createAdmin}
          disabled={loading}
          className='bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs disabled:opacity-50'
        >
          Create Admin
        </button>
        {status && (
          <div className='text-xs text-white mt-2 p-2 bg-gray-700 rounded'>
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDebugButton;