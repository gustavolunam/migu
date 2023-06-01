import { useState, useEffect, createContext } from "react";
import { getDatabase, ref, remove, onValue } from "firebase/database";
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

    const addToCart = () => {
        let random = getRandomNum(1, 10);
        console.log(random);
        const db = getDatabase();
        const dbRef = ref(db, `Cupones/${random}`);
        //let fetCupons=[];

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
                    console.log("Producto eliminado");
                });
                defaultCart();
            }
        });
    }

    const contextValue = {
        cart,
        addToCart,
        removeFromCupons
    };

    return (
        <CuponContext.Provider value={contextValue}>
            {props.children}
        </CuponContext.Provider>
    );
};