import { useState } from "react";
import "../styles/Cupons.css";
import { cuponsData } from "../data/cuponsData"
import useCuponDisplay from "../hooks/useCuponDisplay"

function showCuppons(){
  

  return (
    <div>
      <div className='productsHeader'>
        <Link to="/shopping-list">
          <button> Regresar </button>
        </Link>
        <h1>Agrega un Producto</h1>
      </div>
      
    </div>
  )
}

function Cupons() {

  const DisplayProducts = useCuponDisplay(cuponsData);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div class = "title">
        Cupones
      </div>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Disponibles
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Expirados
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Disponibles</h2>
          <hr />
          <p>
            <DisplayProducts />
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2> Expirados</h2>
          <hr />
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cupons;
