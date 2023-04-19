import { Link } from 'react-router-dom'
import useProductDisplay from "../hooks/useProductDisplay"
import { shoppingListData } from '../data/shoppingListData'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const DisplayShoppingList = useProductDisplay(shoppingListData);
    return (
        <>
            <div className='shoppingListTitle'>
                <Link to="/edit-shopping-list">
                        <button> Editar Lista de Compras </button>
                </Link>
            </div>
            <div>
                <DisplayShoppingList />
            </div>
        </>
    )
}

export default ShoppingList
