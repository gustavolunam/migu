import React from 'react'
import '../styles/PopUp.css';

function Popup(items) {
  return (items.trigger) ? (
    <div className = "popup">
        <div className = "popupInner">
            <button className="closeButton" onClick={() => items.setTrigger(false)}>
              X
            </button>
            {items.children}
            
        </div>
    </div>
  ) : "";
}

export default Popup