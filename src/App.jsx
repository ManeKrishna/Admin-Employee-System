import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import LoginDo from './components/Auth/LoginDo';
import SignUp from './components/Auth/SignUp';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])

  // Sync logged-in employee data with context changes
  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData) {
      const updatedEmployee = userData.find(emp => emp.id === loggedInUserData.id);
      if (updatedEmployee && JSON.stringify(updatedEmployee) !== JSON.stringify(loggedInUserData)) {
        setLoggedInUserData(updatedEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }));
      }
    }
  }, [userData, user])

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    }
    else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert("Invalid credentials");
      }
    }
    else {
      alert("Invalid credentials");
    }
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
      {user === 'admin' ? <AdminDashboard ChangeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard ChangeUser={setUser} employeedata={loggedInUserData} /> : null)}
    </>
  )
}

console.log (JSON.parse(localStorage.getItem('employees')));

export default App