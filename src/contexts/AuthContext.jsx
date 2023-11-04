/* eslint-disable react/prop-types */
import { auth } from "../firebase/FireBase";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    signOut 
} from "firebase/auth"; 

// eslint-disable-next-line react-refresh/only-export-components
export const providerAuthContext= createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(providerAuthContext);
    if(!context){
        console.log("error en auteticacion de usuario")
    }
    return context;
}

export default function AuthContext({ children }){
    const register = async (email,password) => {
        const response = await createUserWithEmailAndPassword(auth,email,password)
        console.log(response)
    }

    const login = async(email,password) => {
        const response = await signInWithEmailAndPassword(auth,email,password);
        console.log(response)
    }

    const loginGoogle = async() => {
        const responseGoogle = new GoogleAuthProvider();
        return await signInWithPopup(auth, responseGoogle); 
    }

    const loginOut = async () => {
        const response = await signOut(auth);
        console.log(response);
    }
    
    return (
        <providerAuthContext.Provider value={{register,login,loginGoogle,loginOut}}>
            { children }
        </providerAuthContext.Provider>
    )
}