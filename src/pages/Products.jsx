import { Link } from 'react-router-dom'
import List from '../components/List';

//import useProductDisplay from "../hooks/useProducts"
//import { productData } from "../data/productData"
import { useProducts } from '../hooks/useProducts';
import '../styles/Products.css'

function Products() {
  const [products, areProductsLoading, error] = useProducts();
  //const DisplayProducts = useProductDisplay(productData);

  return (
    <>
    { areProductsLoading ? <p>Loading...</p> :(
      <> 
        <div>
          <div className='productsHeader'>
            <Link to="/shopping-list">
              <button> Regresar </button>
            </Link>
            <h1>Agrega un Producto</h1>
          </div>
          <List items={products} />
        </div>
      </>
    )}

    
    </>
  )
}

export default Products
