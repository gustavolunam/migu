import { useState } from "react";
import "../styles/Cupons.css";
//import { cuponsData } from "../data/cuponsData"
import Listcupons from "../components/Cupones"
import { useCupons } from "../hooks/useCupons"


function Cupons() {
  const [cupons, CuponsLoading, error] = useCupons();

  return (
    <>
      <div className = "cuponsHeader">
        <h1>Cupones</h1>
      </div>
      <div className = "cuponsContent">
         <Listcupons items={cupons}  /> 
      </div>
    </>
  );
}

export default Cupons
