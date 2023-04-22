import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={(handleSubmit)}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" id="name" placeholder="Full Name"/>
                <label htmlfor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@email.com" id="email" name="email" />
                <label htmlfor="password">contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button>Log In</button>
            </form>
            <span>
                ¿Ya tienes una cuenta? 
                <Link to= "/log">Log in</Link>
            </span>
        </div>
    )
}
  
export default Register