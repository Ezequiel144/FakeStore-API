import { createContext } from "react";
import useFetch from "../hook/useFetch";

export const myProducContext = createContext();

export default function Provider( {children} ){
    const {data,loading} = useFetch('https://fakestoreapi.com/products');
    
    return(
        <myProducContext.Provider value={{data,loading}}>
            {children}
        </myProducContext.Provider>
    )
}
