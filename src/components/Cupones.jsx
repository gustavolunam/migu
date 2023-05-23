import { CheckBox } from '@mui/icons-material';
import '../styles/useCuponsDisplay.css'

const useCuponDisplay = (items) => {

    const useCuponDisplay = () => (
        <>
            {items.map(item => (
                <div className='cupons'>
                    <div className='cuponscontainer'>
                        <p className="cuponType" >{item.type}</p>
                        <h2 className="cuponDesc">{item.desc}</h2>
                        <p className="cuponDate">{item.date}</p>
                        <input type="checkbox" class="cuponButton"></input>
                        {/*<button className='productCheckmark'> <CheckBox /> </button>*/}
                    </div>
                    <hr/>
                </div>
            ))}
        </>
    )

    return useCuponDisplay;
}

export default useCuponDisplay
