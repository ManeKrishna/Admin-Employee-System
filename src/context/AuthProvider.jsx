import React, { createContext, useState, useEffect } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localstorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setlocalStorage();
    const { employees } = getlocalStorage();
    setUserData(employees);
  }, [])

  // Function to update both state and localStorage
  const updateUserData = (newData) => {
    setUserData(newData);
    localStorage.setItem('employees', JSON.stringify(newData));
  }

  return (
    <AuthContext.Provider value={[userData, updateUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider