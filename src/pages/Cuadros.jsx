import {  useState, useContext, useEffect } from "react";
import '../styles/Cuadros.css';
import { CuponContext } from "../context/CuponContext";
import MC from "../components/makeCuadros";

function Cuadros() {

  const [gameWon, setGameWon] = useState(false);
  const { addToCupon } = useContext(CuponContext);
  const [allSquares, setAllSquares] = useState([]);
  



  return (
    <>
      <div className="cuadrosHeader">
        <h1>Selecciona los cuadros verdes</h1>
      </div>
      <div className="cuadrosContent">
        <MC />
      </div>
    </>
  );
}

export default Cuadros
