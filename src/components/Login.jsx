import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../configs/auth';
import { GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider explicitly

// eslint-disable-next-line react/prop-types
const Login = ({ setIsAuth }) => {
  const Navigate = useNavigate();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken; // Access Token

      // Store access token in localStorage
      localStorage.setItem('googleAccessToken', token);

      // Update session state and user information (existing logic)
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("userName", JSON.stringify(result.user.displayName));
      localStorage.setItem("photoURL", JSON.stringify(result.user.photoURL));

      Navigate("/");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const userName = "User";

  return (
    <div className="LoginComponent">
      <div className="login-container">
        <div className='loginCard'>
          <img src="/public/assets/login.png" alt="Illustration" />
          <h2 className='font-semibold'>Bienvenido a CalendarEx </h2>
          <p className='txt-login'>Inicie sesion para continuar</p>
          <div className='google-btn' onClick={signIn}>
            <div className="google-icon-wrapper">
              <img src="/public/assets/google.png" alt="Google Icon" />
            </div>
            <p className='btn-text'><b>Sign in with Google</b></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
