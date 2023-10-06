/* eslint-disable react/prop-types */
import cardShopStyle from './CardShop.module.css';
export default function CardShop({data}){
    
    const {image,title,price,amount} = data;
    /* const [value,setValue] = useState();
    const [isamount,setIsamount] = useState(amount); */

    /* function handleChange(e){
        const {value} = e.target;
        setIsamount(value);
    } */

    return(
        <div className={cardShopStyle.contentCard}>
            <img className={cardShopStyle.image} src={image} alt={title} />
            <h5 className={cardShopStyle.title}>{title}</h5>
            <p className={cardShopStyle.price}>${price * amount}</p>
            {/* <input type="number" value={value} onChange={handleChange} min={0} max={50}/> */}
        </div>
    )
}
