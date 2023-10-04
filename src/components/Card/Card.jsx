/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import cardStyle from './Card.module.css';
import iconOjo from '../../assets/icons/ojo-rojo.png'
import iconAdd from '../../assets/icons/mas.png';
import { useState } from 'react';
import { useContext } from 'react';
import { cartContextProvider } from '../../contexts/CartContext';

export default function Card({prod}){

    const {id,title,image,category} = prod;
    // eslint-disable-next-line no-unused-vars
    const {cart,setCart,addToCart} = useContext(cartContextProvider);
    const [mouseEnter,setMouseEnter] = useState(false);

    //console.log(cart);

    return(
        <div className={cardStyle.contentCard}>
            {/* <p>{mouseEnter ? "true" : "false"}</p> */}
            <div className={cardStyle.contentImage} onPointerEnter={()=>setMouseEnter(true)} onPointerLeave={() => setMouseEnter(false)}>
                <img className={mouseEnter ? cardStyle.imageHover : cardStyle.image} src={image} alt={title} />
                <div className={mouseEnter ? cardStyle.contentButtonHover : cardStyle.contentButton}>
                    <button className={cardStyle.add} onClick={() => addToCart(id,prod)}>
                        <img className={cardStyle.iconAdd} src={iconAdd} alt="add" />
                    </button>
                    <Link to={`/${id}`} className={cardStyle.detail}>
                        <img className={cardStyle.iconOjo} src={iconOjo} alt="details" />
                    </Link>
                </div>
            </div>
            <section className={cardStyle.contentText}>
                <h3 className={cardStyle.category}>{category}</h3>
                <h2 className={cardStyle.title}>{title}</h2>
            </section>
        </div>
    )
}