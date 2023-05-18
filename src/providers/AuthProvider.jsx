import { useEffect, useState } from 'react';
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createBrowserHistory } from 'history';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app); 
const history = createBrowserHistory(); 

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    
    const navigateToHome = () => {
        history.push('/'); // Change the path to your desired home page URL
      };

    //   Create New User

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

    // Google Sign In
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const currentUser = result.user;
            setUser(currentUser)
            // window.location.href = '/';
            navigateToHome();
        })
        .catch(error => {
            console.log('Error', error.message)
        })
    } 

    // Sign Out
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unSubscribe();
        };
      }, []);

   const authInfo = {
         user,
         loading,
         registerUser,
         signInUser,
         logOut,
         handleGoogleSignIn
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;