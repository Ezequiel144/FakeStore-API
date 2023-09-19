import Card from "../../components/Card/Card";
import CardHome from "../../components/CardHome/CardHome";
import Carrusel from "../../components/Carrusel/Carrusel";
import Title from "../../components/Title/Title";
import pagesHomeStyle from './PageHome.module.css';
import useFetch from "../../hook/useFetch";

export default function PagesHome(){

    const { data } = useFetch('https://fakestoreapi.com/products');
    
    return(
        <div className={pagesHomeStyle.contentPagesHome}>
            <Title titleMain="Destacated"/>
            <article>
                <CardHome />
            </article>
            {/* <Carrusel /> */}
            <section className={pagesHomeStyle.contentCardHome}>
                {data?.map(d => {
                    return (
                        <>  
                            <Card 
                                title={d.title}
                                image={d.image}
                                category={d.category}
                            />
                        </>
                    )
                })}
            </section>
        </div>
    )
}