import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFormatError from "../hooks/useFormatError";
import '../styles/Auth.css'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, onValue, set, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { auth, app } from "../apis/firebaseConfig"
import { validEmail,validPassword,validName } from "../tools/Regex";

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

    const validate = () =>{
        if(!validName.test(name)){
            var errorDescription = formatError('auth/invalid-name');
            setErrorMessage(errorDescription);
        }
        else if(!validEmail.test(email)){
            console.log("email");
            var errorDescription = formatError('auth/invalid-email');
            setErrorMessage(errorDescription);
        }
        else if(!validPassword.test(pass)){
            console.log("pass");
            var errorDescription = formatError('auth/invalid-password');
            setErrorMessage(errorDescription);
        }
        else{
            registro;
        }
      }

    const registro = () => {
        
        //Si es algo invalido imprimir el error


        
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
                            <p className="auth-label">Nombre Completo</p>
                            <input onChange={(e) => setName(e.target.value)} type="name" placeholder="John Doe" id="name" name="name" required />
                        </div>
                        <div className="input-field">
                            <p className="auth-label">Correo Electrónico</p>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ejemplo@email.com" id="email" name="email" required />
                        </div>
                        <div className="input-field">
                            <p className="auth-label">Contraseña</p>
                            <p className="auth-description">Mínimo de 6 caracteres</p>
                            <p className="auth-description">Usar minúsculas, mayúsculas y números</p>
                            <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" required />
                        </div>
                    </div>
                    <div className="auth-buttons">
                        <Link to="/log">
                            <button>Iniciar sesión</button>
                        </Link>
                        <button onClick={validate}>Registrame</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Register