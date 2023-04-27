import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validEmail,validPassword,validName } from "../tools/Regex";
import { UserAuth } from "../context/AuthContext";
import useFormatError from "../hooks/useFormatError";
import '../styles/Auth.css'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";
import { auth } from "../apis/firebaseConfig"


function Register() {
    const navigate = useNavigate();
    const db = getDatabase();
    const dbRef = ref(db, 'Usuarios');

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const formatError = useFormatError();
    const { createUser } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const registro = () => {
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
                navigate('/home');
                alert("REGISTRO EXITOSO");
            })
            .catch((error) => {
                var errorDescription = formatError(error.code);
                setErrorMessage(errorDescription);
            });
    }

    const validate = () =>{
        if(!validName.test(name)){
            var errorDescription = formatError('auth/invalid-name');
            setErrorMessage(errorDescription);
        }
        else if(!validEmail.test(email)){
            var errorDescription = formatError('auth/invalid-email');
            setErrorMessage(errorDescription);
        }
        else if(!validPassword.test(pass)){
            var errorDescription = formatError('auth/invalid-password');
            setErrorMessage(errorDescription);
        }
        else{
            registro();
        }
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
                            <input onChange={(e) => setName(e.target.value)} type="name" placeholder="John Doe" id="name" name="name" />
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