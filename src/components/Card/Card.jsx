/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import cardStyle from './Card.module.css';
import iconOjo from '../../assets/icons/ojo-rojo.png'
import iconAdd from '../../assets/icons/mas.png';
import { useState } from 'react';

export default function Card({id,title,image,category}){

    const [mouseEnter,setMouseEnter] = useState(false);

    return(
        <div className={cardStyle.contentCard}  onPointerEnter={()=>setMouseEnter(true)} onPointerLeave={() => setMouseEnter(false)}>
            {/* <p>{mouseEnter ? "true" : "false"}</p> */}
            <div className={cardStyle.contentImage}>
                <img className={mouseEnter ? cardStyle.imageHover : cardStyle.image} src={image} alt={title} />
                <div className={mouseEnter ? cardStyle.contentButtonHover : cardStyle.contentButton}>
                    <button className={cardStyle.add}>
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