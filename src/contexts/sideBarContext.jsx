import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext({});

export const SidebarContextProvider =({children})=>{

    const [isSidebarOpen,setIsSidebarOpen] = useState(true);

    const value={
        isSidebarOpen,
        setIsSidebarOpen
    }

    return (
        <SidebarContext.Provider value = {value}>{children}</SidebarContext.Provider>
    )
}