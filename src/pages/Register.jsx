import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set , push, update} from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"

function Register() {
    const db=getDatabase();
    const dbRef = ref(db, 'Usuarios');

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(name)
    }

    const registro = () => {
       // var name = document.getElementById("nameR").value;
       // var email = document.getElementById("emailR").value;
       // var pass = document.getElementById("passR").value;
        //alert("email="+ email + " pass=" +pass);
    
        createUserWithEmailAndPassword(auth, email, pass)
            .then(auth => {
              push(dbRef, {
        email: email,
        nombre: name,
        //pass: pass
        })
        .then((snap) => {
            const key2 = snap.key;
            console.log(key2);
    
        })
        alert("REGISTRO EXITOSO");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                alert("Fallo " + errorMessage);
              });
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={(handleSubmit)}>
                <label htmlFor="name">Full Name</label>
                <input  onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Full Name"/>
                <label htmlfor="email">email</label>
                <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
                <label htmlfor="password">contraseña</label>
                <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button onClick={registro}>Log In</button>
            </form>
            <span>
                ¿Ya tienes una cuenta? 
                <Link to= "/log">Log in</Link>
            </span>
        </div>
    )
}

  
export default Register