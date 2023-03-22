import React from 'react'
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

const TopbarMobile = () => {
  return (
    <div className='topbarMobile'>
      <div className="topbarMobileBrands">
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
        customClassName={`customBrandIcon`}
        link={`https://nzxt.com/`}
        image={nzxt}
        />
        <BrandIconLink
        link={`https://steelseries.com/`}
        image={steelseries}
        />                                                
      </div>
      <div className="topbarMobileIcons">
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
        <img src={menuIcon} alt="" className="sideMenuImageMobile" />
      </div>
    </div>
  )
}

export default TopbarMobile