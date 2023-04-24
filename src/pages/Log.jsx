import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Auth.css'

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"

import { useNavigate } from "react-router-dom";

function Log() {
  const navigate = useNavigate();
  const db = getDatabase();
  const dbRef = ref(db, 'Usuarios');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert("Fallo " + errorMessage);
      });
  }

  return (
    <div className="auth-body">
      <div className="auth-form">
        <form onSubmit={(handleSubmit)}>
          <h1>Log In</h1>
          <div className="auth-form-content">
            <div className="input-field">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
            </div>
            <div className="input-field">
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
            </div>
          </div>
          <div className="auth-buttons">
            <Link to="/register">
              <button>Registrate aqui</button>
            </Link>
            <button onClick={inicio}>Iniciar sesion</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Log