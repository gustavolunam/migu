import { useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../styles/List.css'
import { Add } from '@mui/icons-material';

const List = ({ items }) => {
  const currentRoute = useLocation();

  function setIcon() {
    if (currentRoute.pathname == "/shopping-list") {
      return <DeleteIcon className='deleteIcon' fontSize='large' />
    } else {
      return <AddCircleIcon className='addIcon' fontSize='large' />
    }
  }

  return (
    <>
      {items.map(item => (
        <div key={item.name} className='product'>
          <div className='productContainer'>
            <div className='productImage'>
              <img src={item.imagen} />
            </div>
            <div className='productDescription'>
              <p className="productName">
                <b>{item.nombre}</b>
              </p>
              <p className="productPrice">${item.precio}</p>
            </div>
            <button>{setIcon()}</button>
            {/*<button className='productCheckmark'> <CheckBox /> </button>*/}
          </div>
        </div >
      ))}
      <div className='productFooter' />
    </>
  )
}

export default List