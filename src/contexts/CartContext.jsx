import { createContext, useState } from "react";

export const cartContextProvider = createContext(); 

// eslint-disable-next-line react/prop-types
export default function CartContext({ children }){

    const [cart,setCart] = useState([]);

    const addToCart = (id,prod) => {    
        const newProd = {...prod,amount: 1};
        const cartItem = cart.find(c => c.id === id);
        
        if(cartItem){
            const newCart = [...cart].map(c => {
                if(c.id === id){
                    return {...c,amount: cartItem.amount + 1}
                }else{
                    return c;
                }
            })
            setCart(newCart);
        }else{
            return setCart(
                [...cart,newProd]
            );
        }
    }

    console.log(cart)
    return(
        <cartContextProvider.Provider value={{cart,setCart,addToCart}}>
            { children }
        </cartContextProvider.Provider>
    )
}