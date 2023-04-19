import { Link } from 'react-router-dom'
import useProductDisplay from "../hooks/useProductDisplay"
import { productData } from "../data/productData"

function Products() {
  const DisplayProducts = useProductDisplay(productData);

  return (
    <div>
      <div className='header'>
        <Link to="/shopping-list">
          <button> Regresar </button>
        </Link>
        <h1>Agrega un Producto</h1>
      </div>
      <DisplayProducts />
    </div>
  )
}

export default Products
