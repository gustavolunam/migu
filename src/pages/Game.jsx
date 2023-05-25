import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { auth } from "../apis/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth";

function Game() {
    const [products, setCupons] = useState([]);

    const getRandomNum = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
    
    const getCupon = () => {
        let random = getRandomNum(1,10);
        console.log(random);
        const db=getDatabase();
        const dbRef = ref(db, `Cupones/${random}`);
        //let fetCupons=[];

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const nombre=snapshot.child("nombre").val();
                const desc=snapshot.child("descripcion").val();
                const fechaExp=snapshot.child("fechaExp").val();
                const fechaIni=snapshot.child("fechaIni").val();
                const aplicado=snapshot.child("aplicado").val();
                
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const uid = user.uid;
                        const dbRef1 = ref(db,`Usuarios/${uid}/ListaCupones/${random}`);
                        set(dbRef1,{
                            nombre: nombre,
                            descripcion: desc,
                            fechaExp: fechaExp,
                            fechaIni: fechaIni,
                            aplicado: aplicado
                        });
                    }
                });
            });
          });
    }

    return (
        <>
        <div>
            <h1> Inserta tu juego aquí </h1>
            <button type="button" onClick={getCupon}>Click Me</button>

        </div>
        </>
    
    )
}

export default Game
