import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const[username, setUsername]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:5000/profile',{
      credentials : 'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUsername(userInfo.username);
      });
    });
  },[]);


  function logout(){
    fetch('http://localhost:5000/logout',{
      credentials : 'include',
      method : 'POST',
    });
    setUsername(null);
  }

  return (
    <div>
      <Link to='/'>My Blog</Link>
      <nav>

    {username && (
      <>
        <Link to='/create'>Create New Post</Link>
        <a onClick={logout}>Logout</a>
      </>
    )}

      {!username && (
        <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
      )}
      </nav>
    </div>
  )
}

export default Header
