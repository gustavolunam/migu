import { createContext, useState, useEffect } from "react";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { auth } from "../apis/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth";

export const CartContext = createContext([]);

export const CartContextProvider = (props) => {
    const db = getDatabase();
    const [cart, setCart] = useState([]);

    const defaultCart = () => {
        let fetchedItems = [];
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const dbRef1 = ref(db, `Usuarios/${uid}/ListaProductos/`);
                onValue(dbRef1, (snapshot) => {
                    snapshot.forEach(childSnapshot => {
                        const id = childSnapshot.key;
                        const { imagen, nombre, precio } = childSnapshot.val();
                        fetchedItems.push({
                            id, imagen, nombre, precio
                        });
                    });
                    setCart(fetchedItems);
                });
            }
        });
    }

    useEffect(() => {
        defaultCart();
    }, []);

    const addToCart = (item) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const dbRef1 = ref(db, `Usuarios/${uid}/ListaProductos/${item.id}/`);
                set(dbRef1, {
                    nombre: item.nombre,
                    imagen: item.imagen,
                    precio: item.precio
                });
                defaultCart();
            }
        });
    }

    const removeFromCart = (item) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const tasksRef = ref(db, `Usuarios/${uid}/ListaProductos/${item.id}/`);
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
        removeFromCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};