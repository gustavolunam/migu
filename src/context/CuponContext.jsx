import { createContext } from "react";
import { getDatabase, ref, remove } from "firebase/database";
import { auth } from "../apis/firebaseConfig"
import { onAuthStateChanged } from "firebase/auth";

export const CuponContext = createContext([]);

export const CuponContextProvider = (props) => {
    const db = getDatabase();

    const removeFromCupons = (id) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const tasksRef = ref(db, `Usuarios/${uid}/ListaCupones/${id}/`);
                remove(tasksRef).then(() => {
                    console.log("Producto eliminado");
                });
            }
        });
        window.location.reload(false);
    }

    const contextValue = {
        removeFromCupons
    };

    return (
        <CuponContext.Provider value={contextValue}>
            {props.children}
        </CuponContext.Provider>
    );
};