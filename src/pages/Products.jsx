import { Link } from 'react-router-dom'
import List from '../components/List';
import { useProducts } from '../hooks/useProducts';
import '../styles/Products.css';
import returnImage from '../assets/back arrow.png';

function Products() {
  const [products, areProductsLoading, error] = useProducts();
  //const DisplayProducts = useProductDisplay(productData);

  return (
    <>
      {areProductsLoading ? <p>Loading...</p> : (
        <>
          <div>
            <div className='productsHeader'>
              <Link to="/shopping-list">
                <button><img className="returnArrow" src={returnImage} /></button>
              </Link>
              <h1>Agrega un Producto</h1>
            </div>
            <div className='productsContent'>
              <List items={products} />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Products
