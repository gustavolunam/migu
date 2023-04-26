import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFormatError from "../hooks/useFormatError";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"

function Register() {
    const navigate = useNavigate();
    const db = getDatabase();
    const dbRef = ref(db, 'Usuarios');

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const formatError = useFormatError();

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
                navigate('/log');
                alert("REGISTRO EXITOSO");
            })
            .catch((error) => {
                var errorDescription = formatError(error.code);
                alert(error.code);
                setErrorMessage(errorDescription);
            });
    }

    return (
        <div className="auth-body">
            <div className="auth-form">
                <form onSubmit={(handleSubmit)}>
                    <h1>Registro</h1>
                    {errorMessage && (
                        <p className="error"> {errorMessage} </p>
                    )}
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
                            <button>Iniciar sesión</button>
                        </Link>
                        <button onClick={registro}>Registrame</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register