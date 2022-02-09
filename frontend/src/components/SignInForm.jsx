import React from 'react';
import axios from 'axios';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    axios.post('http://localhost:4000/auth', {
        email: email,
        password: password
      
    })
    
    .then((res) => {
      navigate('/home')  
    })
    .catch((err) => {
     if(err.code === {Error: "Request failed with status code 400"})
      return "mot de passe incorrect"
      console.log(err)

    })
    
  }
  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
        <input 
          type="text" 
          name="email" 
          id="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email.error"></div>
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      
      <input className="sign" type="submit" value="Se connecter" />

    </form>

  )}

export default SignInForm;
