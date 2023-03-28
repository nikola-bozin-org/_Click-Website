import React, { useContext } from 'react'
import './topbarMobile.css'
import BrandIconLink from '../brand-icon-link/BrandIconLink'
import instagram from '../../images/social/instagram.png'
import facebook from '../../images/social/facebook.png'
import eshark from '../../images/brands/eshark.png'
import logitech from '../../images/brands/logitech.png'
import nzxt from '../../images/brands/nzxt.png'
import steelseries from '../../images/brands/steelseries.png'
import menuIcon from '../../images/other/menu.png'
import SocialIconLink from '../social-icon-link/SocialIconLink'
import { SidebarContext } from '../../contexts/sideBarContext'
import { useState,useEffect } from 'react'
const TopbarMobile = () => {
  const sidebarContext = useContext(SidebarContext);
  const [hideCenter, setHideCenter] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHideCenter(true);
      } else {
        setHideCenter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const onSideMenuClicked = ()=>{
    sidebarContext.setIsSidebarOpen(true);
  }

  return (
    <div data-aos='fade-down' className={`topbarMobile`}>
      <div className={`topbarMobileBrands${hideCenter?' hideTopbarMobileBrands':''}`}>
        <BrandIconLink
        image={eshark}
        link={`https://eshark.gg/`}
        customClassName={`customBrandIcon`}
        />
        <BrandIconLink
        link={`https://www.logitech.com/`}
        image={logitech}
        />
        
        <BrandIconLink
        link={`https://steelseries.com/`}
        image={steelseries}
        />                                                
      </div>
      <div className={`topbarMobileIcons${hideCenter?' smallMarginTop':''}`}>
        <div className="topbarMobileIconsSocial">
        <SocialIconLink
         link={"https://www.instagram.com/click.e.sport/"}
         image={instagram}
        />
        {/* <SocialIconLink
         link={"https://www.instagram.com/click.e.sport/"}
         image={facebook}
        /> */}
        </div>
        <img style={{display:'none'}} src={menuIcon} alt="" className="sideMenuImageMobile" onClick={onSideMenuClicked}/>
      </div>
    </div>
  )
}

export default TopbarMobile