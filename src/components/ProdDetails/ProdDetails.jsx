/* eslint-disable react/prop-types */
import prodDetailsStyle from './ProdDetails.module.css';
import { useContext } from 'react';
import { cartContextProvider } from '../../contexts/CartContext';

// eslint-disable-next-line react/prop-types
export default function ProdDetails({produc}){

    const {addToCart} = useContext(cartContextProvider);
    const {id,title,category,description,image,price} = produc;

    return(
        <div className={prodDetailsStyle.contentDetails}>
            <section className={prodDetailsStyle.contentImage}>
                <img className={prodDetailsStyle.image} src={image}/>
            </section>
            <section className={prodDetailsStyle.contentText}>
                <h1 className={prodDetailsStyle.title}>{title}</h1>
                <h4 className={prodDetailsStyle.category}>{category}</h4>
                <p className={prodDetailsStyle.description}>{description}</p>
                <p className={prodDetailsStyle.price}>$ {price}</p>
                <button className={prodDetailsStyle.addCart} onClick={() => addToCart(id,produc)}>Add to Cart</button>
            </section>
        </div>
    )
}