import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] =  useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  
    const db=getDatabase();
    const dbRef = ref(db, 'Productos');

    let fetchedProductos=[];

    onValue(dbRef, (snapshot) => {

        snapshot.forEach(childSnapshot=>{
        const id=childSnapshot.key;
        const{imagen, nombre, precio} =childSnapshot.val();

        fetchedProductos.push({
            id, imagen, nombre, precio
        });
    });
    
    setProducts(fetchedProductos);
    setIsLoading(false);
    setError(false);

    }, (errorObject) => {
        console.log("The read failed"  + errorObject.name);
        setError(true)
        }
    );
  }, [])

  return [products, isLoading, error]
}

export { useProducts };