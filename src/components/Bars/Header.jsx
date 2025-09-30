import React from 'react'

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.ChangeUser(null);
  }

  const username = props.employeedata ? props.employeedata.name : 'Admin';

  return (
    <div className='flex justify-between items-start sm:items-end text-white'>
      <h1 className='text-xl sm:text-2xl'>
        Hello <br />
        <span className='text-3xl sm:text-4xl'>{username}👋</span>
      </h1>
      <button 
        onClick={logoutUser} 
        className='bg-purple-400 hover:bg-purple-500 transition-colors px-4 py-2 rounded-lg text-sm sm:text-base'>
        Log Out
      </button>
    </div>
  )
}

export default Header