/* eslint-disable react/prop-types */


export default function CardShop({price,description,image,title}){
    

    return(
        <div>
            <h5>{title}</h5>
            <p>{price}</p>
        </div>
    )
}