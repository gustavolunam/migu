import { createContext, useContext, useEffect, useState } from "react";
import {
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { auth } from '../apis/firebaseConfig';

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [userName, setUserName] = useState('')

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const db = getDatabase();
            const uid = currentUser.uid;
            const dbRef1 = ref(db, `Usuarios/${uid}/`);
            onValue(dbRef1, (snapshot) => {
                const id = snapshot.key;
                const { nombre } = snapshot.val();
                setUserName(nombre);
            });
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider
            value={{ user, userName, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}