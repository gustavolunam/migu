import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MapIcon from '@mui/icons-material/Map';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import '../styles/Navbar.css'

function Navbar() {
    const ARHandler = () =>{
        var linkArray = [
            'https://cheerful-fenglisu-41a334.netlify.app/uvaldo.html',
            'https://cheerful-fenglisu-41a334.netlify.app/mauricio.html',
            'https://cheerful-fenglisu-41a334.netlify.app/gannon.html',
            'https://cheerful-fenglisu-41a334.netlify.app/canelita.html'
        ]
        var randomIndex = Math.floor(Math.random() * linkArray.length); 
        var randomElement = linkArray[randomIndex];
        window.location.replace(randomElement);
    }

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
                <button onClick={ARHandler}>
                    <ViewInArIcon className='icon' fontSize="large" />
                    <p> AR </p>
                </button>
            <Link to="https://glunam.itch.io/mapa-migu">
                <button>
                    <MapIcon className='icon' fontSize="large" />
                    <p>Mapa</p>
                </button>
            </Link>
        </div>
    )
}

export default Navbar
