/* eslint-disable react/prop-types */

import { useState } from "react";


export default function CardShop({data}){
    
    const {title,price,amount} = data;
    const [value,setValue] = useState();
    const [isamount,setIsamount] = useState(amount);

    function handleChange(e){
        const {value} = e.target;
        setIsamount(value);
        //console.log(value);
    }

    return(
        <div>
            <h5>{title}</h5>
            <p>{price * isamount}</p>
            <input type="number" value={value} onChange={handleChange} min={0} max={50}/>
        </div>
    )
}