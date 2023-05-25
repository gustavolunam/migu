import '../styles/useCuponsDisplay.css'
import Popup from './Popup.jsx';
import { useState,useContext } from 'react';
import { CuponContext } from '../context/CuponContext';

const Listcupons = ({ items }) => {

    const [showPopUp, setShowPopUp] = useState(false);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaExp, setFechaExp] = useState("");
    const [cuponId, setCuponId] = useState(0);

    const { removeFromCupons } = useContext(CuponContext);

    const show = (item) => {
        setNombre(item.nombre);
        setDescripcion(item.descripcion);
        setFechaExp(item.fechaExp);
        setShowPopUp(true);
        setCuponId(item.id);
        console.log(item.id)
    }
    return (
        <>
            {items.map(item => (
                <div className='cupons'>
                    <button className="cuponButton" onClick={() => show(item)}>
                        <div className='cuponscontainer'>
                            <h2 className="cuponName">{item.nombre}</h2>
                            <p className="cuponDate">Expira:  {item.fechaExp}</p>
                        </div>
                    </button>
                </div>
            ))}
            <Popup trigger={showPopUp} setTrigger={setShowPopUp} >
                <div className = "popUpBorder">
                    <h1>{nombre}</h1>
                    <p>{descripcion}</p>
                    <h2>Expira: {fechaExp}</h2>
                    <button className="popUpbtn" onClick = {() => {removeFromCupons(cuponId); setShowPopUp(false);}}>
                        <h3>USAR</h3>
                    </button>
                </div>
            </Popup >
            <div className="cuponFooter" />
        </>
    )
}

export default Listcupons