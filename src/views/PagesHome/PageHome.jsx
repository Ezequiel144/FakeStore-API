import pagesHomeStyle from './PageHome.module.css';
import { useContext, useState } from "react";
import {myProducContext} from "../../contexts/ProductContext";
import Card from '../../components/Card/Card';
import imageMain from '../../assets/image/forest-5889923_1920.png'
import Title from '../../components/Title/Title';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';

export default function PagesHome(){
    const [valueCate,setValueCate] = useState('All');
    const {data,loading,error} = useContext(myProducContext)

    const handleOnChange = (e) => {
        const {value} = e.currentTarget;
        return setValueCate(value)
    }

    let cardFilter = valueCate === 'All' ? data : data.filter(d => d.category === valueCate);

    return(
        <div className={pagesHomeStyle.contentPagesHome}>
            <article className={pagesHomeStyle.contentImage}>
                <div className={pagesHomeStyle.contentText}>
                    <div className={pagesHomeStyle.contentMainText}>
                        <h1 className={pagesHomeStyle.mainTitle}>Welcome to <span className={pagesHomeStyle.titleDif}>FAKE STORE</span></h1>
                        <p className={pagesHomeStyle.description}>
                            the store with a wide variety of products and confidence in each purchase
                        </p>
                    </div>
                    <Carousel />
                </div>
                <img className={pagesHomeStyle.image} src={imageMain} alt="image Main" />
            </article>
            <Title titleMain={"Products"}/>
            <CategoryCard 
                handleOnChange = {handleOnChange}
            />
            <article className={pagesHomeStyle.contentCardHome}>
                
                {loading && <p>Loading...</p>}
                {error && <p>{error} No se puedieron cargar los productos</p>}
                {  
                    cardFilter?.map(d => {
                        return( 
                            <Card
                                prod={d} 
                                key={d.id}
                            />
                        )
                    })
                }
            </article>
            
        </div>
    )
}