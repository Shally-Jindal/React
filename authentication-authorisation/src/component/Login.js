import React, { useState } from 'react';

function Login({ setAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Example API call
    const response = await fetch('https://api.example.com/login', {
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({email,password})
    });

    const data = await response.json();
    if (response.ok) {
      // Store token securely (avoid localStorage if possible)
      localStorage.setItem('token', data.token);
      setAuth(true); // Update authentication state
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
