import { createContext } from "react";
import useFetch from "../hook/useFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const myProducContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Provider( {children} ){
    const {data,loading} = useFetch('https://fakestoreapi.com/products');
    
    return(
        <myProducContext.Provider value={{data,loading}}>
            {children}
        </myProducContext.Provider>
    )
}
