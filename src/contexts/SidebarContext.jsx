import { createContext, useState } from "react"


// eslint-disable-next-line react-refresh/only-export-components
export const sidebar = createContext(); 

// eslint-disable-next-line react/prop-types
export default function SidebarContext({ children }){
    const [open,setOpen] = useState(false);

    function handleOpenCloes(){
        setOpen(false)
    }

    return(
        <sidebar.Provider value={{open,setOpen,handleOpenCloes}}>
            { children }
        </sidebar.Provider>
    )
}