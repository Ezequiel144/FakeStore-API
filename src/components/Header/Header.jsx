import headerStyle from './Header.module.css';
import logo from '../../assets/logo/Fake-removebg-preview-cortado.png'
import user from '../../assets/icons/usuario.png'
import imgCart from '../../assets/icons/anadir-al-carrito.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { sidebar } from '../../contexts/SidebarContext';
import { cartContextProvider } from '../../contexts/CartContext';


export default function Header(){

    const {open,setOpen} = useContext(sidebar);
    const {cart,amountCart} = useContext(cartContextProvider)

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
                <div className={headerStyle.contentCart} onClick={() => setOpen(!open)}>
                    <img className={headerStyle.cart} src={imgCart} alt="Cart" />
                    {
                        cart.length !== 0 ? <div style={{display: "flex"}} className={headerStyle.amount}>{amountCart}</div> : <div style={{display: "none"}} className={headerStyle.amount}>1</div>  
                    }
                </div>
            </div>
        </header>
    )
}