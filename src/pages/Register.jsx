import React, { useState } from "react";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"

function Register() {
    const db = getDatabase();
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
        <div className="auth-body">
            <div className="auth-form">
                <form onSubmit={(handleSubmit)}>
                    <h1>Registro</h1>
                    <div className="auth-form-content">
                        <div className="input-field">
                            <input onChange={(e) => setEmail(e.target.value)} type="name" placeholder="Nombre Completo" id="name" name="name" />
                        </div>
                        <div className="input-field">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
                        </div>
                        <div className="input-field">
                            <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                        </div>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/log">
                            <button>Iniciar sesion</button>
                        </Link>
                        <button onClick={registro}>Registrame</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register