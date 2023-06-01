import { useContext } from "react";
import "../styles/Cupons.css";
import { CuponContext } from "../context/CuponContext";
import Listcupons from "../components/CuponList"
import { useCupons } from "../hooks/useCupons"


function Cupons() {
  const { cart } = useContext(CuponContext);

  return (
    <>
      <div className="cuponsHeader">
        <h1>Cupones</h1>
      </div>
      <div className="cuponsContent">
        <Listcupons items={cart} />
      </div>
      <div className="cuponFooter" />
    </>
  );
}

export default Cupons
