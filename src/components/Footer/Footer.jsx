import footerStyle from './Footer.module.css';

export default function Footer(){
    return(
        <div className={footerStyle.contentFooter}>
            <section>
                <p></p>
            </section>
            <section className={footerStyle.contentAutore}>
                <h5 className={footerStyle.text}>hecho por <a className={footerStyle.link} href="">Ezequiel Garcia</a></h5>
            </section>
        </div>
    )
}