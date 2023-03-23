import React from 'react'
import './topbar.css'
import instagram from '../../images/social/instagram.png'
import facebook from '../../images/social/facebook.png'
import eshark from '../../images/brands/eshark.png'
import logitech from '../../images/brands/logitech.png'
import nzxt from '../../images/brands/nzxt.png'
import steelseries from '../../images/brands/steelseries.png'
import menuIcon from '../../images/other/menu.png'
import SocialIconLink from '../social-icon-link/SocialIconLink'
import BrandIconLink from '../brand-icon-link/BrandIconLink'
import { useContext } from 'react'
import { SidebarContext } from '../../contexts/sideBarContext'


const Topbar = () => {

    const sidebarContext = useContext(SidebarContext);

    const onSideMenuClicked = ()=>{
      sidebarContext.setIsSidebarOpen(true);
    }
  return (
    <div data-aos='fade-down' className='topbar'>
        <div className="topbarWrapper">
            <div className="topbarWrapperLeft">
                <SocialIconLink
                 link={"https://www.instagram.com/click.e.sport/"}
                 image={instagram}
                />
                {/* <SocialIconLink
                 link={"https://www.instagram.com/click.e.sport/"}
                 image={facebook}
                /> */}
            </div>
            <div data-aos='fade-down' className="topbarWrapperCenter">
                <BrandIconLink
                customClassName={`customBrandIcon`}
                link={`https://eshark.gg/`}
                image={eshark}
                />
                <BrandIconLink
                link={`https://www.logitech.com/`}
                image={logitech}
                />
                <BrandIconLink
                customClassName={`customBrandIcon`}
                link={`https://nzxt.com/`}
                image={nzxt}
                />
                <BrandIconLink
                link={`https://steelseries.com/`}
                image={steelseries}
                />                                                
            </div>
            <div data-aos='fade-down' className="topbarWrapperRight">
                <img src={menuIcon} alt="" className="sideMenuImage" onClick={onSideMenuClicked} />
            </div>
        </div>
    </div>
  )
}

export default Topbar