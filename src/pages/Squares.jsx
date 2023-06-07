import '../styles/Squares.css';
import MC from "../components/makeSquares";

function Squares() {
  
  return (
    <>
      <div className="cuadrosHeader">
        <h1>Selecciona el cuadro verde</h1>
      </div>
      <div className="cuadrosContent">
        <MC />
      </div>
    </>
  );
}

export default Squares
