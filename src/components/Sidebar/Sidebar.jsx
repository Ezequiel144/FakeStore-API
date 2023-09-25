import { useContext } from "react";
import { sidebar } from "../../contexts/SidebarContext";
import sidebarStyle from './Sidebar.module.css';

export default function Sidebar (){

    const {open,handleOpenCloes} = useContext(sidebar);

    return(
        <div className={sidebarStyle.sidebar}>
            sidebar
        </div>
    )
}