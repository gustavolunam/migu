import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/home">
                <button>
                    <HomeIcon className='icon' fontSize="large" />
                    <p>Inicio</p>
                </button>
            </Link>
            <Link to="/shopping-list">
                <button>
                    <ShoppingCartIcon className='icon' fontSize="large" />
                    <p>Carrito</p>
                </button>
            </Link>
            <Link to="/profile">
                <button>
                    <PersonIcon className='icon' fontSize="large" />
                    <p>Perfil</p>
                </button>
            </Link>
            <Link to="/cupons">
                <button>
                    <LoyaltyIcon className='icon' fontSize="large" />
                    <p>Cupones</p>
                </button>
            </Link>
            <Link to="/map">
                <button>
                    <ViewInArIcon className='icon' fontSize="large" />
                    <p>Mapa</p>
                </button>
            </Link>
        </div>
    )
}

export default Navbar
