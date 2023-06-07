import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../styles/List.css'

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const List = ({ items, query, icon, action, alert }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {
      items.filter(item => {
        if( query === ''){
          return item.nombre;
        }else if(item.nombre.toLowerCase().includes(query.toLowerCase())){
          return item.nombre;
        }
      })
      .map((item, index) => (
        <div className='product' key={index}>
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
            <button onClick={() => {handleClick(); action(item)}}>{icon}</button>
          </div>
        </div >
      ))}
      <div className='alert'>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert className='productAlert' onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {alert}
          </Alert>
        </Snackbar>
      </div>
      <div className='productFooter' />
    </>
  )
}

export default List