import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../apis/firebaseConfig";
import useFormatError from "../hooks/useFormatError";
import { validEmail, validPassword } from "../tools/Regex";
import '../styles/Auth.css'

var loginAttempts = 5;

function Log() {
  const navigate = useNavigate();
  const formatError = useFormatError();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const inicio = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(auth => {
        navigate('/home')
      })
      .catch((error) => {
        var errorDescription = formatError(error.code);
        loginAttempts = loginAttempts - 1;
        setErrorMessage(errorDescription);
      });
  }

  const validate = () => {
    if (loginAttempts == 0) {
      var errorDescription = formatError('auth/too-many-requests');
      setErrorMessage(errorDescription);
      setTimeout(() => {
        loginAttempts = 5;
      }, 10000)
    }
    else if (!validEmail.test(email)) {
      var errorDescription = formatError('auth/invalid-email');
      setErrorMessage(errorDescription);
      loginAttempts = loginAttempts - 1;
    }
    else if (!validPassword.test(pass)) {
      var errorDescription = formatError('auth/invalid-password');
      setErrorMessage(errorDescription);
      loginAttempts = loginAttempts - 1;
    }
    else {
      inicio();
    }
  }

  return (
    <div className="auth-body">
      <div className="auth-form">
        <form id="login-form" onSubmit={handleSubmit}>
          <h1>Log In</h1>
          {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
          <div className="auth-form-content">
            <div className="input-field">
              <p className="auth-label">Correo Electrónico</p>
              <input 
                tabindex="1" 
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault()}} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="ejemplo@email.com" 
                id="email" 
                name="email"
              />
            </div>
            <div className="input-field">
              <p className="auth-label">Contraseña</p>
              <input 
                tabindex="2" 
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault()}} 
                value={pass} onChange={(e) => setPass(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" 
              />
            </div>
          </div>
          <div className="auth-buttons">
            <Link to="/register">
              <button tabindex="4">Registrate aquí</button>
            </Link>
            <button tabindex="3" onClick={validate}>Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Log