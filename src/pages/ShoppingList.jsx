import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { shoppingListData } from '../data/shoppingListData'
import { CartContext } from '../context/CartContext';
import List from '../components/List';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/ShoppingList.css'

function ShoppingList() {
    const { removeFromCart } = useContext(CartContext);

    return (
        <>
            <div className='shoppingListHeader'>
                <Link to="/edit-shopping-list">
                    <button> Editar Lista de Compras </button>
                </Link>
            </div>
            <div className='shoppingListContent'>
                {/* <Filter setProducts={setProducts} /> */}
                <List items={shoppingListData} icon={<DeleteIcon className='deleteIcon' fontSize='large'/>} action={removeFromCart}/>
            </div>
        </>
    )
}

export default ShoppingList
