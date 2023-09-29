import { createContext, useState } from "react";

export const cartContextProvider = createContext(); 

// eslint-disable-next-line react/prop-types
export default function CartContext({ children }){

    const [cart,setCart] = useState([]);

    const addToCart = (id,prod) => {    
        const newProd = {...prod,amount: 1};
        const cartItem = cart.some(c => c.id === id);

        if(cartItem){
            [...cart].map(c => {
                c.amount += 1
            })
        }else{
            setCart(
                [...cart,newProd]
            );
        }
    }

    return(
        <cartContextProvider.Provider value={{cart,setCart,addToCart}}>
            { children }
        </cartContextProvider.Provider>
    )
}