import {  useState, useContext, useEffect } from "react";
import '../styles/Squares.css';
import { CuponContext } from "../context/CuponContext";
import MC from "../components/makeCuadros";

function Squares() {

  const [gameWon, setGameWon] = useState(false);
  const { addToCupon } = useContext(CuponContext);
  const [allSquares, setAllSquares] = useState([]);
  



  return (
    <>
      <div className="cuadrosHeader">
        <h1>Selecciona un cuadro verde</h1>
      </div>
      <div className="cuadrosContent">
        <MC />
      </div>
    </>
  );
}

export default Squares
