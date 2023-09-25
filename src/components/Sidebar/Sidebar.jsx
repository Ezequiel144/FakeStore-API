import { useContext } from "react";
import { sidebar } from "../../contexts/SidebarContext";
import sidebarStyle from './Sidebar.module.css';
import iconX from '../../assets/icons/x.png'

export default function Sidebar (){

    // eslint-disable-next-line no-unused-vars
    const {open,handleOpenCloes} = useContext(sidebar);

    let conditionSidebar = open ? '0' : '-100%';
    console.log(conditionSidebar)
    return(
        <div className={sidebarStyle.sidebar} style={{left: conditionSidebar}}>
            <div className={sidebarStyle.contentClose} onClick={handleOpenCloes}>
                <img className={sidebarStyle.close} src={iconX} alt="iconX" />
            </div>
        </div>
    )
}