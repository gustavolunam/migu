import { createContext, useContext, useEffect, useState } from "react";
import {
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../apis/firebaseConfig'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider
            value={{ user, logout }}>
            { children }
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}