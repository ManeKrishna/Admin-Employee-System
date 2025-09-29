import React, { createContext, useState, useEffect } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localstorage';

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
  // localStorage.clear();
const [userData, setUserdata] = useState(null);

useEffect(() => {
  setlocalStorage();
  const {employees} = getlocalStorage();
  setUserdata(employees);
}, [])




  return (
    <>
      <AuthContext.Provider value={[userData,setUserdata]}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider