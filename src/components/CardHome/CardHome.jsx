import cardhomeStyle from './CardHome.module.css';
import useFetch from '../../hook/useFetch';


export default function CardHome(){
    const { data,loading,error } = useFetch('https://fakestoreapi.com/products');
    
    return(
        <div className={cardhomeStyle.contentCard}>
            {error && <p>{error}</p>}
            {loading && <p>loading...</p>}
            {data?.map(dat => {
                return (
                    <CardInfo 
                        key={dat.id}
                        id = {dat.id}
                        title={dat.title}
                        category={dat.category}
                        image={dat.image}
                    />
                )
            })} 
        </div>
    )
}

function CardInfo({id,title,category,image}){
    return(
        <div className={cardhomeStyle.card}>
            <img className={cardhomeStyle.image} id={id} src={image} alt={title} />
            <p>{category}</p>
        </div>
    )
}


