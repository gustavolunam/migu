import '../styles/useCuponsDisplay.css'
import Popup from './Popup.jsx';
import {useState} from 'react';

const Listcupons = ({items}) => {

    const [showPopUp, setShowPopUp] = useState(false); 

    const show = () => {
        setShowPopUp(true)
    }
    return(
        <>
            {items.map(item => (
                <div className='cupons'>
                    <button className="cuponButton"  onClick = {show}>
                        <div className='cuponscontainer'>
                            <h2 className="cuponName">{item.nombre}</h2>
                            <p className="cuponDate">Expira:  {item.fechaExp}</p>  
                        </div>    
                    </button>
                    <Popup trigger = {showPopUp} setTrigger = {setShowPopUp}>
                        <h1>{item.nombre}</h1>
                        <p>{item.descripcion}</p>
                    </Popup>
                </div>
            ))}
            <div className = "cuponFooter"/>
        </>
    )
}

export default Listcupons
