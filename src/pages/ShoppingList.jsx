import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { listaCompras } from '../hooks/listaCompras';
import List from '../components/List';
import DeleteIcon from '@mui/icons-material/Delete';
import editImage from '../assets/edit.png';
import '../styles/ShoppingList.css'
function ShoppingList() {
    const [prodSel, areprodSelLoading, error] = listaCompras();
    const { removeFromCart } = useContext(CartContext);

    return (
        <>
            <div className='shoppingListHeader'>
                <Link to="/edit-shopping-list">
                    <button>
                    <img className="editar" src={editImage}/>
                    EDITAR
                    </button>
                </Link>
                <h1>Tus Productos</h1>
            </div>
            <div className='shoppingListContent'>
                <List items={prodSel} icon={<DeleteIcon className='deleteIcon' fontSize='large'/>} action={removeFromCart}/>
            </div>
        </>
    )
}

export default ShoppingList
