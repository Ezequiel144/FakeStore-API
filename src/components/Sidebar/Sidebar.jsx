import { useContext } from "react";
import { sidebar } from "../../contexts/SidebarContext";
import sidebarStyle from './Sidebar.module.css';
import iconX from '../../assets/icons/x.png';
import { cartContextProvider } from "../../contexts/CartContext";
import CardShop from "../CardShop/CardShop";
import iconDelete from '../../assets/icons/borrar.png';

export default function Sidebar (){

    // eslint-disable-next-line no-unused-vars
    const {cart,empty} = useContext(cartContextProvider);
    // eslint-disable-next-line no-unused-vars
    const {open,handleOpenCloes} = useContext(sidebar);

    let conditionSidebar = open ? '0' : '-100%';
    return(
        <div className={sidebarStyle.sidebar} style={{left: conditionSidebar}}>
            <section className={sidebarStyle.contentText}>
                <h2 className={sidebarStyle.title}>Shop Cart</h2>
                <div className={sidebarStyle.contentClose} onClick={handleOpenCloes}>
                    <img className={sidebarStyle.close} src={iconX} alt="iconX" />
                </div>
            </section>
            <section className={sidebarStyle.contentCardProd}>
                {
                    cart.map(c => {
                        return(
                            <CardShop
                                data = {c}
                                key = {c.id}
                            />
                        )
                    })
                }
            </section>
            <section className={sidebarStyle.contentTotal}>
                <h5 className={sidebarStyle.text}>Total:{0}</h5>
                <div className={sidebarStyle.contentIconDelete}>
                    <img className={sidebarStyle.iconDelete} src={iconDelete} alt="delete" onClick={empty}/>
                </div>
            </section>
        </div>
    )
}