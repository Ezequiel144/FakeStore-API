import footerStyle from './Footer.module.css';

export default function Footer(){
    return(
        <div className={footerStyle.contentFooter}>
            <section className={footerStyle.contertRights}>
                <p className={footerStyle.copy}>Copyright © Ecommerce Shop 2023. All rights reserved</p>
            </section>
            <section className={footerStyle.contentAutore}>
                <h5 className={footerStyle.text}>made by <a className={footerStyle.link} href="https://github.com/Ezequiel144">Ezequiel Garcia</a></h5>
            </section>
        </div>
    )
}