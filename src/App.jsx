// src/App.jsx
import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import LoginDo from './components/Auth/LoginDo';
import SignUp from './components/Auth/SignUp';
import { AuthContext } from './context/AuthProvider';
import { checkAdminCredentials, getEmployeeByEmail } from './services/firebaseServices';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    setLoading(false);
  }, []);

  // Sync logged-in employee data with Firestore changes
  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData) {
      const updatedEmployee = userData.find(emp => emp.id === loggedInUserData.id);
      if (updatedEmployee && JSON.stringify(updatedEmployee) !== JSON.stringify(loggedInUserData)) {
        setLoggedInUserData(updatedEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }));
      }
    }
  }, [userData, user, loggedInUserData]);

  const handleLogin = async (email, password) => {
    try {
      // Check admin credentials
      const isAdmin = await checkAdminCredentials(email, password);
      
      if (isAdmin) {
        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
        return;
      }

      // Check employee credentials
      const employee = await getEmployeeByEmail(email);
      
      if (employee && employee.password === password) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error('Login error:', error);
      alert("Login failed. Please try again.");
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
    <>
      {!user ? (
        showSignUp ? (
          <SignUp setShowSignUp={setShowSignUp} handleLogin={handleLogin} />
        ) : (
          <LoginDo handleLogin={handleLogin} setShowSignUp={setShowSignUp} />
        )
      ) : ''}
      {user === 'admin' ? (
        <AdminDashboard ChangeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard ChangeUser={setUser} employeedata={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;