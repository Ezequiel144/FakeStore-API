/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import cardStyle from './Card.module.css';

export default function Card({value,id,title,image,category}){

    return(
        <div className={cardStyle.contentCard}>
            {console.log(value)}
            <Link to={`/${id}`} className={cardStyle.contentImage}>
                <img className={cardStyle.image} src={image} alt={title} />
            </Link>
            <section className={cardStyle.contentText}>
                <h3 className={cardStyle.category}>{category}</h3>
                <h2 className={cardStyle.title}>{title}</h2>
            </section>
        </div>
    )
}