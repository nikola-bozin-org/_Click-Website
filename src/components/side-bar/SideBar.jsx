import React from 'react'
import './sideBar.css'
import closeSidebar from '../../images/other/cancel.png'
import { useState } from 'react'

const SideBar = () => {

    const [isSidebarOpen,setIsSidebarOpen] = useState(true);

    const onCloseButtonPressed = () =>{
        setIsSidebarOpen(false);
    }

    const onButtonClick = () => {
        console.info("Hi");
    }
    return (
        <div className={`sidebar${isSidebarOpen?``:`Closed`}`}>
            <div className="closeSidebarImageWrapper">
                <img onClick={onCloseButtonPressed} src={closeSidebar} alt="" className={`closeSidebarImage${isSidebarOpen?'':'Faded'}`} />
            </div>
            <div className="sidebarButtons">
                <p onClick={onButtonClick} className="sidebarButton">
                    Cekamo te
                </p>
                <p onClick={onButtonClick} className="sidebarButton">
                    Click Esports Dota 2
                </p>
                <p onClick={onButtonClick} className="sidebarButton">
                    Turniri.
                </p>
                <p onClick={onButtonClick} className="sidebarButton">
                    Rodjendani
                </p>
            </div>
        </div>
    )
}

export default SideBar