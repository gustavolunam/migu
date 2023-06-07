import '../styles/PopUp.css';

function Popup(items) {
  return (items.trigger) ? (
    <div className = "popup">
        <div className = "popupInner">
            {items.children}
        </div>
    </div>
  ) : "";
}

export default Popup