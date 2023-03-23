import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext({});

export const SidebarContextProvider =({children})=>{

    const [isSidebarOpen,setIsSidebarOpen] = useState(false);


    const cekamoTeRef = useRef(null);
    const dota2Ref = useRef(null);
    const turniriRef =useRef(null);
    const rodjendaniRef = useRef(null);
    const lokacijeRef = useRef(null);

    const value={
        isSidebarOpen,
        setIsSidebarOpen,
        cekamoTeRef,
        dota2Ref,
        turniriRef,
        rodjendaniRef,
        lokacijeRef,

    }

    return (
        <SidebarContext.Provider value = {value}>{children}</SidebarContext.Provider>
    )
}