'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js navigation

const Login = ({ data }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Router instance

  const handleSearch = () => {
    const trimmedEmail = inputEmail.trim().toLowerCase();
    const user = data.find((user) => user.email.toLowerCase() === trimmedEmail);

    if (user) {
      setError('');
      router.push(`/profile?email=${encodeURIComponent(user.email)}`); // Redirect with email param
    } else {
      setError('Email not found');
    }
  };

  return (
    <div className="container">
  <input 
    type="email" 
    placeholder="Enter email" 
    value={inputEmail} 
    onChange={(e) => setInputEmail(e.target.value)} 
  />
  <button onClick={handleSearch}>Search</button>
  {error && <p style={{ color: 'red' }}>{error}</p>}
</div>
  )
};

export default Login;
