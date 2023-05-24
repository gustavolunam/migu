import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../apis/firebaseConfig"


const listaCompras = () => {
    const [prodSel, setprodSel] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
  
      setIsLoading(true);
      const db=getDatabase();
      let fetchedProdSel=[];
      //const dbRef = ref(db, 'Cupones');
      onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const dbRef1 = ref(db,`Usuarios/${uid}/ListaProductos/`);
            onValue(dbRef1, (snapshot) => {
              snapshot.forEach(childSnapshot=>{
              const id=childSnapshot.key;
              const{imagen, nombre, precio} =childSnapshot.val();
              fetchedProdSel.push({
                id, imagen, nombre, precio
              });
          });
    
    
          setprodSel(fetchedProdSel);
          setIsLoading(false);
          setError(false);
      
          }, (errorObject) => {
              console.log("The read failed"  + errorObject.name);
              setError(true)
              }
          );
        }
      });
      }, [])
    return [prodSel, isLoading, error]
    
  }
  
  export { listaCompras };