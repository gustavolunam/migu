import { createContext, useState } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import { auth } from "../apis/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth";

export const CartContext = createContext([]);

export const CartContextProvider = (props) => {
    const db = getDatabase();
    const dbRef = ref(db, 'Usuarios');

    const addToCart = (item) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const dbRef1 = ref(db, `Usuarios/${uid}/ListaProductos/${item.id}/`);
                push(dbRef1, {
                    nombre: item.nombre,
                    imagen: item.imagen,
                    precio: item.precio
                });
            }
        });
    }

    const removeFromCart = (item) => {
        console.log('Wahoo');
    }

    const contextValue = {
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};