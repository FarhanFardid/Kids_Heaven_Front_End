import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

// context api created
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [loading,setLoading] =useState(true);
    const [user,setUser] = useState(null);

    // Auth providers
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // Create user,Login, logout,  functions

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
 
     const updateUser=(user,name,photo) =>{
    return updateProfile(user, {
            displayName: name, photoURL: photo
          })
     }

     const logOut=()=>{
        return signOut(auth)
     }

     const googleSign=()=>{
        return signInWithPopup(auth,googleProvider)
     }
//  To monitor the current user state 

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        }
        )
        return ()=>{
            unsubscribe();
        }
     },[auth])

    //  pass the functions and variables to other components
    const authInfo ={
user,loading,createUser,signInUser,logOut,googleSign,updateUser
    }
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;