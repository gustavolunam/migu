import { Link } from 'react-router-dom'
import List from '../components/List';
import '../styles/ShoppingList.css'
//import { useProducts } from '../hooks/useProducts';
import { shoppingListData } from '../data/shoppingListData';
import editImage from '../assets/edit.png';

function ShoppingList() {

    //const [products, areProductsLoading, error] = useProducts();

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
                {/* <Filter setProducts={setProducts} /> */}
                <List items={shoppingListData} />
            </div>
        </>
    )
}

export default ShoppingList
