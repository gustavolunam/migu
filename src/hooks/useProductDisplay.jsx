import { useNavigate } from 'react-router-dom';
import '../styles/useProductDisplay.css'

const useProductDisplay = (items) => {
    const navigate = useNavigate();

    const ProductDisplay = () => (
        <>
            {items.map(item => (
                <div>
                    <div className='container' onClick={() =>
                        navigate('/shopping-list')
                    }>
                        <img className="productImage" src={item.image}/>
                        <h2 className="productName">{item.name}</h2>
                        <p className="productPrice">${item.price}</p>
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    )

    return ProductDisplay;
}

export default useProductDisplay
