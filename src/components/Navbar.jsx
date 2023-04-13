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
            <Link to="/">
                <button>
                    <HomeIcon />
                </button>
            </Link>
            <Link to="/cupons">
                <button>
                    <LoyaltyIcon />
                </button>
            </Link>
            <Link to="/profile">
                <button>
                    <PersonIcon />
                </button>
            </Link>
            <Link to="/shoppinglist">
                <button>
                    <ShoppingCartIcon />
                </button>
            </Link>
            <Link to="/map">
                <button>
                    <ViewInArIcon />
                </button>
            </Link>
        </div>
    )
}

export default Navbar
