// src/utils/initAdmin.js
// Run this script manually if admin is not created automatically
// Usage: Import and call initializeAdmin() from browser console or add a button

import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const initializeAdmin = async () => {
  try {
    console.log('Checking admin data...');
    
    // Check if admin exists
    const adminRef = doc(db, 'admin', 'A001');
    const adminSnap = await getDoc(adminRef);
    
    if (adminSnap.exists()) {
      console.log('✓ Admin already exists:', adminSnap.data());
      return { success: true, message: 'Admin already exists' };
    }
    
    // Create admin
    const adminData = {
      id: "A001",
      email: "admin@me.com",
      name: "Admin",
      password: "123"
    };
    
    await setDoc(adminRef, adminData);
    console.log('✓ Admin created successfully!', adminData);
    
    return { success: true, message: 'Admin created successfully' };
    
  } catch (error) {
    console.error('❌ Error initializing admin:', error);
    return { success: false, error: error.message };
  }
};

// Export for use in components
export default initializeAdmin;