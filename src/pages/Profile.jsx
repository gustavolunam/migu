import { Link } from 'react-router-dom'
import '../styles/Profile.css'

function Profile() {
  return (
    <div>
      <div>
        <Link to="/information">
          <button>Información de Perfil</button>
        </Link>
      </div>
    </div>
  )
}

export default Profile