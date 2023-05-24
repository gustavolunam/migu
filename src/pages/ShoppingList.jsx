import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Fab from '@mui/material/Fab';
import { CartContext } from '../context/CartContext';
import { listaCompras } from '../hooks/listaCompras';
import List from '../components/List';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import editImage from '../assets/edit.png';
import '../styles/ShoppingList.css'
function ShoppingList() {
    const [prodSel, areprodSelLoading, error] = listaCompras();
    const { removeFromCart } = useContext(CartContext);

    return (
        <>
            <div className='shoppingListHeader'>
                <h1>Mi Carrito</h1>
            </div>
            <div className='shoppingListEdit'>
                <Link to="/edit-shopping-list">
                    <Fab variant="extended">
                        <EditIcon className='editIcon' fontSize='medium' />
                        Editar
                    </Fab>
                </Link>
            </div>
            <div className='shoppingListContent'>
                <List items={prodSel} icon={<DeleteIcon className='deleteIcon' fontSize='large' />} action={removeFromCart} alert={"Producto eliminado exitosamente!"} />
            </div>
        </>
    )
}

export default ShoppingList
