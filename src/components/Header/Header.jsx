import headerStyle from './Header.module.css';
import logo from '../../assets/logo/Fake-removebg-preview-cortado.png'
import user from '../../assets/icons/usuario.png'
import cart from '../../assets/icons/anadir-al-carrito.png'
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header className={headerStyle.header}>
            <Link to={'/'} className={headerStyle.logo}>
                <img className={headerStyle.imageLogo} src={logo} alt="ImgLogo"/>
            </Link>
            {/* <ul className={headerStyle.list}>
                {
                    navbar.map(data => {
                        return <li key={data.id} className={headerStyle.item}>{data.title}</li>
                    })
                }
            </ul> */}
            <div className={headerStyle.contentUserCart}>
                <img className={headerStyle.user} src={user} alt="User" />
                <img className={headerStyle.cart} src={cart} alt="Cart" />
            </div>
        </header>
    )
}