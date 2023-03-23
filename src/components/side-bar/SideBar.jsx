import React from 'react'
import './sideBar.css'
import closeSidebar from '../../images/other/cancel.png'
import { useContext } from 'react'
import { SidebarContext } from '../../contexts/sideBarContext'

const SideBar = () => {

    const sidebarContext = useContext(SidebarContext)
    console.info(sidebarContext);

    const onCloseSidebarImageClicked=()=>{
        sidebarContext.setIsSidebarOpen(false);
    }

    const onButtonClick = () => {
        console.info("Hi");
    }
    return (
        <div className={`sidebar${sidebarContext.isSidebarOpen?``:`Closed`}`}>
            <div className="closeSidebarImageWrapper">
                <img onClick={onCloseSidebarImageClicked} src={closeSidebar} alt="" className={`closeSidebarImage${sidebarContext.isSidebarOpen?'':'Faded'}`} />
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