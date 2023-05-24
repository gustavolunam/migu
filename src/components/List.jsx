import '../styles/List.css'

const List = ({ items, icon, action }) => {

  return (
    <>
      {items.map(item => (
        <div className='product'>
          <div className='productContainer'>
            <div className='productImage'>
              <img src={item.imagen} />
            </div>
            <div className='productDescription'>
              <p className="productName">
                <b>{item.nombre}</b>
              </p>
              <p className="productPrice">${item.precio}</p>
            </div>
            <button onClick={() => action(item)}>{icon}</button>
          </div>
        </div >
      ))}
      <div className='productFooter' />
    </>
  )
}

export default List