import { createContext } from "react";
import useFetch from "../hook/useFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const categoryContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Category({ children }){
    
    const {data} = useFetch('https://fakestoreapi.com/products/categories');
    
    return(
        <categoryContext.Provider value={{data}}>
            { children }
        </categoryContext.Provider>
    )
}
