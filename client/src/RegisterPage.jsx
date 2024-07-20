import React, { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if(response.ok) {
                console.log('Registration successful:', data);
            } else {
                console.error('Error registering:', data);
            }
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    return (
        <div>
            <form onSubmit={register}>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
