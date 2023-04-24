import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Start.css'

function Start() {
    return (
        <div className="start">
                <img className="logo" src={Logo} />
                <Link to="/log">
                    <button>Log In</button>
                </Link>
                <hr />
                <Link to="/register">
                    <button>Sign Up</button>
                </Link>
        </div>
    )
}

export default Start