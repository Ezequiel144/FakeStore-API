import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartContextProvider = createContext(); 

// eslint-disable-next-line react/prop-types
export default function CartContext({ children }){
    const [cart,setCart] = useState([]);
    const [amountCart,setAmountCart] = useState()

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
            alertToast();
            setCart(newCart);
        }else{
            alertToast();
            return setCart(
                [...cart,newProd]
            );
        }
    }

    const deleteCard = (id) => {
        const newCart = cart.filter(c => c.id !== id);
        setCart(newCart);
    }
    
    const empty = () => {
        setCart([]);
    }

    const increment = (id) => {
        const amountIncrement = cart.find(c => c.id === id);
        if(amountIncrement){
            const newCart = [...cart].map(c => {
                if(c.id === id){
                    return {...c,amount: c.amount + 1}
                }else{
                    return c;
                }
            })
            setCart(newCart);
        }
    }

    const decrement = (id) => {
        const amountIncrement = cart.find(c => c.id === id);
        if(amountIncrement){
            const newCart = [...cart].map(c => {
                if(c.id === id){
                    return {...c,amount: c.amount < 2 ? c.amount = 1 : c.amount - 1/* c.amount - 1 */}
                }else{
                    return c;
                }
            })
            setCart(newCart);
        }
    }

    const alertToast = () => {
        toast.success("Producto Agregado",{
            position: "top-center",
            autoClose: 1500
        });
    }

    useEffect(()=>{
        const newAmountCart = cart.reduce((acc,item) => {
            return acc + item.amount;
        },0);
        setAmountCart(newAmountCart);
    },[cart])

    return(
        <cartContextProvider.Provider value={{cart,setCart,addToCart,deleteCard,empty,increment,decrement,amountCart}}>
            { children }
        </cartContextProvider.Provider>
    )
}