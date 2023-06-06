import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"
import '../styles/Profile.css'

function Profile() {
    const { user, userName, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out');
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <div className='profileHeader'>
                <h1>Mi Cuenta</h1>
            </div>
            <div className='profileContent'>
                <h2> {userName} </h2>
                <p> {user.email} </p>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </>
    )
}

export default Profile
