import { auth } from "../firebase/FireBase";
import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    signOut 
} from "firebase/auth"; 

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context){
        console.log("error en auteticacion de usuario")
    }
    return context;
}

export default function providerAuth({ children }){
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
        <authContext.Provider value={{register,login,loginGoogle,loginOut}}>
            { children }
        </authContext.Provider>
    )
}