import cardStyle from './Card.module.css';

export default function Card({title,image,category}){

    return(
        <div className={cardStyle.contentCard}>
            <section className={cardStyle.contentImage}>
                <img className={cardStyle.image} src={image} alt={title} />
            </section>
            <section className={cardStyle.contentText}>
                <h3 className={cardStyle.category}>{category}</h3>
                <h2 className={cardStyle.title}>{title}</h2>
            </section>
        </div>
    )
}