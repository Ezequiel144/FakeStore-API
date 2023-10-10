import contStyle from './Cont.module.css';

export default function Cont(){
    return(
        <div className={contStyle.contentCont}>
            <p className={contStyle.less}>-</p>
            <div className={contStyle.screen}>0</div>
            <p className={contStyle.add}>+</p>
        </div>
    )
}