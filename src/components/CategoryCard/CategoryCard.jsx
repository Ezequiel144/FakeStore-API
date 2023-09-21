import { useContext } from "react"
import { categoryContext } from "../../contexts/Category";
import categoryCardStyle from './CategoryCard.module.css'

// eslint-disable-next-line react/prop-types
export default function CategoryCard({handleOnChange}){
    const {data} = useContext(categoryContext);
    let idData = 0;

    return(
        <div className={categoryCardStyle.contentSelect}>
            <select className={categoryCardStyle.select} name="select" onChange={handleOnChange}>
                <option className={categoryCardStyle.option} value="All" >All</option>
                {data?.map(d => <option className={categoryCardStyle.option} key={idData++} value={d}>{d}</option>)}
            </select>
        </div>
    )
}