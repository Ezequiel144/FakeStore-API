
import useFetch from '../../hook/useFetch';

export default function Carrusel(){
    const { data } = useFetch('https://fakestoreapi.com/products');
    /* const [img,setImg] = useState({}); */

    //const [dataCarrusel,setDataCarrusel] = useState(data);

    
    console.log(data[0].image);

    return(
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={data[0]} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={data[1]} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={data[2]} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            
        </div>
    )
}