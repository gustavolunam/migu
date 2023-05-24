import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
import List from '../components/List';
import returnImage from '../assets/back arrow.png';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../styles/Products.css';

function Products() {
  const { addToCart } = useContext(CartContext);
  const [products, areProductsLoading, error] = useProducts();

  return (
    <>
      {areProductsLoading ? <p>Loading...</p> : (
        <>
          <div>
            <div className='productsHeader'>
              <Link className='backToList'  to="/shopping-list">
                <ArrowBackIosNewIcon className='arrowBack' fontSize='small' />
                <p>Regresar</p>
              </Link>
              <h1>Agrega un Producto</h1>
            </div>
            <div className='productsContent'>
              <List items={products} icon={<AddCircleIcon className='addIcon' fontSize='large' />} action={addToCart}/>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Products
