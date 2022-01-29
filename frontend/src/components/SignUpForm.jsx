import React from 'react';
import { useState } from 'react';



const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {

    }

  return (

    <form action="" onSubmit={handleRegister} id="sign-up-form">
      <label htmlFor="email">Nom</label>
        <input 
          type="text" 
          name="username" 
          id="username" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      <label htmlFor="email">Email</label>
        <input 
          type="text" 
          name="email" 
          id="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      <input className="sign" type="submit" value="S'inscrire" />

  </form>
  )}

export default SignUpForm;
