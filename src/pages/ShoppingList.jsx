import { Link } from 'react-router-dom'
import List from '../components/List';
import '../styles/ShoppingList.css'
//import { useProducts } from '../hooks/useProducts';
import { shoppingListData } from '../data/shoppingListData'

function ShoppingList() {

    //const [products, areProductsLoading, error] = useProducts();

    return (
        <>
            <div className='shoppingListHeader'>
                <Link to="/edit-shopping-list">
                    <button> Editar Lista de Compras </button>
                </Link>
            </div>
            <div className='shoppingListContent'>
                {/* <Filter setProducts={setProducts} /> */}
                <List items={shoppingListData} />
            </div>
        </>
    )
}

export default ShoppingList
