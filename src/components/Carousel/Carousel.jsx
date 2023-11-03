import carouselStyle from './Carousel.module.css';
import {  CarouselProvider ,  Slider ,  Slide , Dot, }  from  'pure-react-carousel' ;
import  'pure-react-carousel/dist/react-carousel.es.css' ;
import img1 from '../../assets/imagens_carousel/pexels-mart-production-7679446.jpg';
import img2 from '../../assets/imagens_carousel/pexels-mart-production-7679452.jpg';
import img3 from '../../assets/imagens_carousel/pexels-kindel-media-6994293.jpg';

export default function Carousel(){
    return(
        <div className={carouselStyle.content}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
                isPlaying={true}
                interval={2000}
            >   
                <Slider className={carouselStyle.contentSlide}>
                    <Slide index={0}><img className={carouselStyle.image} src={img1} alt="img1" /></Slide>
                    <Slide index={1}><img className={carouselStyle.image} src={img2} alt="img2" /></Slide>
                    <Slide index={2}><img className={carouselStyle.image} src={img3} alt="img3" /></Slide>
                </Slider>
                <div className={carouselStyle.contentItem}>
                    <Dot className={carouselStyle.item} slide={0}></Dot>
                    <Dot className={carouselStyle.item} slide={1}></Dot>
                    <Dot className={carouselStyle.item} slide={2}></Dot>
                </div>
                
            </CarouselProvider>
        </div>
    )
}