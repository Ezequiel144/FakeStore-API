/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import cardShopStyle from './CardShop.module.css';
import Cont from '../Cont/Cont';
import { useContext } from 'react';
import { cartContextProvider } from '../../contexts/CartContext';

export default function CardShop({data}){
    
    const {id,image,title,price,amount} = data;

    const {deleteCard} = useContext(cartContextProvider);

    return(
        <div className={cardShopStyle.contentCard}>
            <section className={cardShopStyle.cardSectionOne}>
                <img className={cardShopStyle.image} src={image} alt={title} />
                <Link to={`/${id}`} className={cardShopStyle.title}>{title}</Link>
            </section>
            <section className={cardShopStyle.cardSectionTwo}>
                <Cont
                    amount = {amount} 
                    id = {id}
                />
                <p className={cardShopStyle.priceUnit}>${price}</p>
                <p className={cardShopStyle.price}>${parseFloat(price * amount).toFixed(2)}</p>
            </section>
            <div className={cardShopStyle.contentX}>
                <p className={cardShopStyle.x} onClick={() => deleteCard(id)}>X</p>
            </div>
            {/* <input type="number" value={value} onChange={handleChange} min={0} max={50}/> */}
        </div>
    )
}
