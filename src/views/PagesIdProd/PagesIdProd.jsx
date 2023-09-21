/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { myProducContext } from "../../contexts/ProductContext";
import ProdDetails from "../../components/ProdDetails/ProdDetails";


export default function PagesIdProd(){
    const {data,loading} = useContext(myProducContext);
    const [produc,setProduc] = useState(data);
    const {prod} = useParams();

    useEffect(()=>{
        setProduc(produc.find(d => d.id === parseInt(prod)));
    },[prod])
    
    

    return(
        <div>
            {loading && <p>loading</p>}
            <ProdDetails 
                prod = {produc}
            />
        </div>
    )
}