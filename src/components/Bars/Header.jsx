import React from 'react'

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.ChangeUser(null);
  }

  // Get username from props
  const username = props.employeedata ? props.employeedata.name : 'Admin';

  return (
    <div className='flex justify-between items-end text-white'>
      <h1 className='text-2xl'>
        Hello <br />
        <span className='text-4xl'>{username}👋</span>
      </h1>
      <button 
        onClick={logoutUser} 
        className='bg-purple-400 hover:bg-purple-500 transition-colors p-2 rounded-lg'>
        Log Out
      </button>
    </div>
  )
}

export default Header