import React from 'react'
import './sideBar.css'
import closeSidebar from '../../images/other/cancel.png'
import { useContext } from 'react'
import { SidebarContext } from '../../contexts/sideBarContext'

const SideBar = () => {

    const sidebarContext = useContext(SidebarContext)
    const {cekamoTeRef,dota2Ref,turniriRef,rodjendaniRef,lokacijeRef} = sidebarContext;

    const onCloseSidebarImageClicked=()=>{
        sidebarContext.setIsSidebarOpen(false);
    }

    const scrollToElementTop = (element) => {
        const elementTop = element.current.offsetTop;
        sidebarContext.setIsSidebarOpen(false);
        setTimeout(() => {
          window.scrollTo({ left: 0, top: elementTop, behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className={`sidebar${sidebarContext.isSidebarOpen ? "" : " sidebarClosed"}`}>
            <div className="closeSidebarImageWrapper">
                <img onClick={onCloseSidebarImageClicked} src={closeSidebar} alt="" className={`closeSidebarImage`} />
            </div>
            <div className="sidebarButtons">
                <p onClick={()=>{scrollToElementTop(cekamoTeRef)}} className="sidebarButton">
                    Cekamo te
                </p>
                <p onClick={()=>{scrollToElementTop(dota2Ref)}} className="sidebarButton">
                    Click Esports Dota 2
                </p>
                <p onClick={()=>{scrollToElementTop(turniriRef)}} className="sidebarButton">
                    Turniri
                </p>
                <p onClick={()=>{scrollToElementTop(rodjendaniRef)}} className="sidebarButton">
                    Rodjendani
                </p>
                <p onClick={()=>{scrollToElementTop(lokacijeRef)}} className="sidebarButton">
                    Lokacije
                </p>
            </div>
        </div>
    )
}

export default SideBar