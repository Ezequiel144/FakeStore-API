import pagesHomeStyle from './PageHome.module.css';
import { useContext } from "react";
import {myProducContext} from "../../contexts/ProductContext";
import Card from '../../components/Card/Card';
import imageMain from '../../assets/image/forest-5889923_1920.png'
import Title from '../../components/Title/Title';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

export default function PagesHome(){

    const {data,loading} = useContext(myProducContext)

    return(
        <div className={pagesHomeStyle.contentPagesHome}>
            <article className={pagesHomeStyle.contentImage}>
                <img className={pagesHomeStyle.image} src={imageMain} alt="image Main" />
            </article>
            <Title titleMain={"Productos"}/>
            <CategoryCard />
            <article className={pagesHomeStyle.contentCardHome}>
                {loading && <p>Loading...</p>}
                {
                    data?.map(d => {
                        return( 
                            <Card 
                                key={d.id}
                                id={d.id}
                                title={d.title}
                                image={d.image}
                                category={d.category}
                            />
                        )
                    })
                }
            </article>
            
        </div>
    )
}