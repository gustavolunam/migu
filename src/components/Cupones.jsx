import { CheckBox } from '@mui/icons-material';
import '../styles/useCuponsDisplay.css'

const Listcupons = ({items}) => {
    return(
        <>
            {items.map(item => (
                <div key={item.nombre} className='cupons'>
                    <div className='cuponscontainer'>
                        <p className="cuponType" >{item.descripcion}</p>
                        <h2 className="cuponDesc">{item.nombre}</h2>
                        <p className="cuponDate">{item.fechaExp}</p>
                        <input type="checkbox" className="cuponButton"></input>
                        {/*<button className='productCheckmark'> <CheckBox /> </button>*/}
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    )
}

export default Listcupons
