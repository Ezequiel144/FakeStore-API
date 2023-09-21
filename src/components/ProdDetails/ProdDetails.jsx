

export default function ProdDetails({prod}){

    const {title,category,description,image,price} = prod;

    return(
        <div>
            <h1>{title}</h1>
            <h4>{category}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <img src={image}/>

        </div>
    )
}