import { useState, useEffect, createContext } from "react";
import { getDatabase, ref, remove, onValue, set } from "firebase/database";
import { auth } from "../apis/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth";

export const CuponContext = createContext([]);

export const CuponContextProvider = (props) => {
    const db = getDatabase();
    const [cart, setCart] = useState([]);

    const defaultCart = () => {
        let fetchedCupons = [];
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const dbRef1 = ref(db, `Usuarios/${uid}/ListaCupones/`);
                onValue(dbRef1, (snapshot) => {
                    snapshot.forEach(childSnapshot => {
                        const id = childSnapshot.key;
                        const { codigo, descripcion, fechaExp, fechaIni, nombre } = childSnapshot.val();
                        fetchedCupons.push({
                            id, codigo, descripcion, fechaExp, fechaIni, nombre
                        });
                    });
                    setCart(fetchedCupons);
                });
            }
        });
    }

    useEffect(() => {
        defaultCart();
    }, []);

    const getRandomNum = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    
    const addToCupon = () => {
        let random = getRandomNum(1, 10);
        const db = getDatabase();
        const dbRef = ref(db, `Cupones/${random}`);

        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const nombre = snapshot.child("nombre").val();
                const desc = snapshot.child("descripcion").val();
                const fechaExp = snapshot.child("fechaExp").val();
                const fechaIni = snapshot.child("fechaIni").val();
                const codigo = snapshot.child("codigo").val();

                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const uid = user.uid;
                        const dbRef1 = ref(db, `Usuarios/${uid}/ListaCupones/${random}`);
                        set(dbRef1, {
                            nombre: nombre,
                            descripcion: desc,
                            fechaExp: fechaExp,
                            fechaIni: fechaIni,
                            codigo: codigo
                        });
                    }
                    defaultCart();
                });
            });
        });
    }

    const removeFromCupons = (id) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const tasksRef = ref(db, `Usuarios/${uid}/ListaCupones/${id}/`);
                remove(tasksRef).then(() => {
                    console.log("Cupon eliminado");
                });
                defaultCart();
            }
        });
    }

    const contextValue = {
        cart,
        addToCupon,
        removeFromCupons
    };

    return (
        <CuponContext.Provider value={contextValue}>
            {props.children}
        </CuponContext.Provider>
    );
};