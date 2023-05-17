import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);  

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password, name, userPhoto) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .then((result) =>{
            const user = result.user;
            return updateProfile(user, {displayName: name, photoURL:userPhoto})
             .then(()=> {
                return user;
             })
             .catch((error) => {
                console.log(error);
                throw error;
             });
        });
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            console.log(setUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[]);
   const authInfo = {
         user,
         loading,
         registerUser,
         signInUser,
         logOut
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;