import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../apis/firebaseConfig"


const useCupons = () => {
    const [cupons, setCupons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
  
      setIsLoading(true);
      const db=getDatabase();
      let fetchedCupons=[];
      //const dbRef = ref(db, 'Cupones');
      onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const dbRef1 = ref(db,`Usuarios/${uid}/ListaCupones/`);
            onValue(dbRef1, (snapshot) => {
              snapshot.forEach(childSnapshot=>{
              const id=childSnapshot.key;
              const{aplicado, descripcion, fechaExp, fechaIni, nombre} =childSnapshot.val();
              fetchedCupons.push({
                id, aplicado, descripcion, fechaExp, fechaIni, nombre
              });
          });
    
    
          setCupons(fetchedCupons);
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
    return [cupons, isLoading, error]
    
  }
  
  export { useCupons };