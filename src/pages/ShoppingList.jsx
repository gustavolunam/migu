import { Link } from 'react-router-dom'

function ShoppingList() {
    return (
        <div className='container'>
            <Link to="/edit-shopping-list">
                    <button> Editar Lista de Compras </button>
            </Link>
        </div>
    )
}

export default ShoppingList
