import pagesHomeStyle from './PageHome.module.css';
import { useContext } from "react";
import {myProducContext} from "../../contexts/ProductContext";
import Card from '../../components/Card/Card';

export default function PagesHome(){

    const {data,loading} = useContext(myProducContext)

    return(
        <div className={pagesHomeStyle.contentPagesHome}>
            <article>
                <img src="" alt="image Main" />
            </article>
            <article className={pagesHomeStyle.contentCardHome}>
                {loading && <p>Loading...</p>}
                {
                    data?.map(d => {
                        return( 
                            <Card 
                                key={d.id}
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