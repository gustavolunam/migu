import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
import List from '../components/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../styles/Products.css';


function Products() {
  const [query, setQuery] = useState("")
  const { addToCart } = useContext(CartContext);
  const [products, areProductsLoading, error] = useProducts();

  return (
    <>
      {areProductsLoading ? <p>Loading...</p> : (
        <>
          <div>
            <div className='productsHeader'>
              <Link className='backToList' to="/shopping-list">
                <ArrowBackIosNewIcon className='arrowBack' fontSize='medium' />
              </Link>
              <h1>Agrega un Producto</h1>
            </div>
            <div className='productsContent'>
            <input className="search" placeholder="Nombre Producto" onChange={event => setQuery(event.target.value)} />
              <List items={products} query = {query} icon={<AddCircleIcon className='addIcon' fontSize='large' />} action={addToCart} alert={"Producto agregado exitosamente!"}/>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Products
