import { CheckBox } from '@mui/icons-material';
import '../styles/useProductDisplay.css'

const useProductDisplay = (items) => {

    const ProductDisplay = () => (
        <>
            {items.map(item => (
                <div className='product'>
                    <div className='productContainer'>
                        <img className="productImage" src={item.image}/>
                        <h2 className="productName">{item.name}</h2>
                        <p className="productPrice">${item.price}</p>
                        <button className='productCheckmark'> <CheckBox /> </button>
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    )

    return ProductDisplay;
}

export default useProductDisplay
