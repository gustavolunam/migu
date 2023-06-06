import { useState, useContext } from 'react';
import { Link} from "react-router-dom";
import Popup from './Popup.jsx';
import { CuponContext } from "../context/CuponContext";
import '../styles/Squares.css';

const makeCuadros = () => {
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("greenSqr");
  
  const { addToCupon } = useContext(CuponContext);


  const clickSquare = () => {
    setActive(true)
    
  } 

    const renderSquares = () => {
        const squares = [];
        const color = "greenSqr";
    
        for (let i = 0; i < 16; i++) {
          if (i % 4 == 0) {
            squares.push(<button className="redSqr" />);
          } else if (i % 4 == 1) {
            squares.push(<button className="blueSqr" />);
          } else if (i % 4 == 2) {
            squares.push(<button onClick={clickSquare}
              className =  {color} />);
          } else {
            squares.push(<button className="yellowSqr" />);
          }
        }
        return squares;
      };
      return (
        <>
          {renderSquares()}
          <Popup trigger={active} setTrigger={setActive} >
                <div className = "popUpBorder">
                  <h1>Ganaste</h1>
                  <Link to = "/cupons">
                  <button className="popUpbtn" onClick = {addToCupon}>
                        <h3>Regresar</h3>
                    </button>
                  </Link>
                    
                </div>
            </Popup >
        </>
      );
}

export default makeCuadros;