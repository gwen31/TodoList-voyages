import React from 'react';
import { useState } from 'react';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const Profil = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInpModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInpModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInpModal(true);
        }
        
    }

  return (
        <div className="connection-form">
            <div className="form-container">
                <button className='button'
                        onClick={handleModals} 
                        id="register"
                        >
                        S'inscrire
                    </button>
                    <button className='button'
                        onClick={handleModals} 
                        id="login"
                        >
                        Se connecter
                    </button>
               
            </div>
            <div className="signup-signin">
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        </div>
          
  )}

export default Profil;
