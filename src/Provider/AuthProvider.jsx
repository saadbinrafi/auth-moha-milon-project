import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/FirebaseConfig';

export const AuthContext = createContext(null)



// google sign in method 
const googleProvider = new GoogleAuthProvider()









const AuthProvider = ({ children }) => {
   

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

        const singInWithGoogle = ()=>{
            setLoading(true)
            return signInWithPopup (auth, googleProvider)
            
        }

   

    const logOut = () => {
        return signOut(auth)
    }


    // observe auth state change  
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser),
            console.log("observing user ",currentUser)
            setLoading(false)
            
        })
        return() =>{
            unSubscribe();
        }
    },[])

   

    const authInfo = { 
        user, 
        loading,
        createUser, 
        signInUser,
        logOut, 
        singInWithGoogle,

    }


    





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


 
