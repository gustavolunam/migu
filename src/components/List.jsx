import { CheckBox } from '@mui/icons-material';``
import '../styles/List.css'

const List = ({items}) => {
  return (
    <>
      {items.map(item => (
        <div key={item.name} className='product'>
          <div className='productContainer'>
              <img className="productImage" src={item.imagen}/>
              <h2 className="productName">{item.nombre}</h2>
              <p className="productPrice">${item.precio}</p>
              <input type="checkbox" class="checks"></input>
              {/*<button className='productCheckmark'> <CheckBox /> </button>*/}
          </div>
          <hr/>
        </div>
      ))}
    </>
  )
}

export default List