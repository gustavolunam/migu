import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFormatError from "../hooks/useFormatError";
import '../styles/Auth.css'

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"

function Log() {
  const navigate = useNavigate();
  const db = getDatabase();
  const dbRef = ref(db, 'Usuarios');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formatError = useFormatError();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

  const inicio = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(auth => {
        navigate('/home')
        alert("INICIO SESION EXITOSO");
      })
      .catch((error) => {
        var errorDescription = formatError(error.code);
        setErrorMessage(errorDescription);
      });
  }

  return (
    <div className="auth-body">
      <div className="auth-form">
        <form onSubmit={(handleSubmit)}>
          <h1>Log In</h1>
          {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
          <div className="auth-form-content">
            <div className="input-field">
              <p className="auth-label">Correo Electrónico</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="ejemplo@email.com" id="email" name="email" />
            </div>
            <div className="input-field">
              <p className="auth-label">Contraseña</p>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
          </div>
          <div className="auth-buttons">
            <Link to="/register">
              <button>Registrate aquí</button>
            </Link>
            <button onClick={inicio}>Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Log