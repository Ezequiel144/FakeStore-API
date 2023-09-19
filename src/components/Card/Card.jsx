import cardStyle from './Card.module.css';
import useFetch from '../../hook/useFetch';

export default function Card({title,image,category}){

    return(
        <div className={cardStyle.contentCard}>
            <section className={cardStyle.contentImage}>
                <img className={cardStyle.image} src={image} alt={title} />
            </section>
            <section className={cardStyle.contentText}>
                <h2 className={cardStyle.text}>{title}</h2>
                {/* <h3 className={cardStyle.text}>{category}</h3> */}
            </section>
        </div>
    )
}