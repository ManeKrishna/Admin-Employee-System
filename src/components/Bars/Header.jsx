import React from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('');

  // if (!employeedata) {
  //   setUsername('Admin');
  // }else{
  //   setUsername(employeedata.name);
  // }

  const logoutUser=()=>{
    localStorage.setItem('loggedInUser','');
    // window.location.reload();
    props.ChangeUser(null);
  }

  return (
    <div className='flex justify-between items-end text-white'>
      <h1 className='text-2xl'>Hello <br /><span className='text-4xl'>username👋</span></h1>    
      <button onClick={logoutUser} className='bg-purple-400 p-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header 
 