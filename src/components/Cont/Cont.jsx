import { useContext } from 'react';
import contStyle from './Cont.module.css';
import { cartContextProvider } from '../../contexts/CartContext';

// eslint-disable-next-line react/prop-types
export default function Cont({id,amount}){

    const {increment,decrement} = useContext(cartContextProvider);

    return(
        <div className={contStyle.contentCont}>
            <p className={contStyle.less} onClick={() => decrement(id)}>-</p>
            <div className={contStyle.screen}>{amount}</div>
            <p className={contStyle.add} onClick={() => increment(id)}>+</p>
        </div>
    )
}