import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config'
import { tr } from 'date-fns/locale';

export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('');
    const [loading,setLoading]=useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const googleProvider= new GoogleAuthProvider()
    const socialLogIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const userLogIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    } 

    const updateDisplayUser=provider=>{
        return updateProfile(auth.currentUser,provider)
    }

    const userResetPassword=(email)=>{
       return sendPasswordResetEmail(auth, email)
    }

    const userLogOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
 
    const authInfo={
        user,
        loading,
        createUser,
        userLogIn,
        updateDisplayUser,
        userLogOut,
        socialLogIn,
        userResetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;