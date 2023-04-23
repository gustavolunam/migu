import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import CryptoImages from '../assets/homebanner.jpg'

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set , push, update} from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"

import { useNavigate } from "react-router-dom";


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

function Log() {
  const navigate = useNavigate();
  const db=getDatabase();
  const dbRef = ref(db, 'Usuarios');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
  }

  const inicio = () => {

    signInWithEmailAndPassword(auth, email, pass)
        .then(auth => {navigate('/home')
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
    <Container>
      <Image src={CryptoImages} alt="homebanner" />
      <div className="auth-form-container">
        <form onSubmit={(handleSubmit)}>
          <label htmlfor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
          <label htmlfor="password">contraseña</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
          <button onClick={inicio}>Log In</button>
        </form>
        <span>
          ¿Aún no tienes una cuenta? 
          <Link to= "/register">Registrate aquí</Link>
        </span>
      </div>
    </Container>
  )
}

export default Log