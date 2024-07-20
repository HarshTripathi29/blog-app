import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);

    async function login(ev) {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
                credentials : 'include',
            });

            if(response.ok) {
               setRedirect(true);
            }else{
              alert('wrong credentials');
            }

        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    if(redirect){
      return <Navigate to={'/'}/>
    }
  return (
    <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={ev => setUsername(ev.target.value)} />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
  )
}

export default LoginPage
