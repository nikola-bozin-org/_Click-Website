import React from 'react'
import './topbar.css'
import instagram from '../../images/social/instagram.png'


const Topbar = () => {
  return (
    <div data-aos='fade-down' className='topbar'>
        <div className="topbarWrapper">
            <div className="topbarWrapperLeft">
                <IconLink
                 link={"https://www.instagram.com/click.e.sport/"}
                 image={instagram}
                />
                 <IconLink
                 link={"https://www.instagram.com/click.e.sport/"}
                 image={instagram}
                />
                 <IconLink
                 link={"https://www.instagram.com/click.e.sport/"}
                 image={instagram}
                />
                 <IconLink
                 link={"https://www.instagram.com/click.e.sport/"}
                 image={instagram}
                />
            </div>
            <div data-aos='fade-down' className="topbarWrapperCenter">

            </div>
            <div data-aos='fade-down' className="topbarWrapperRight">

            </div>
        </div>
    </div>
  )
}

const IconLink = ({link,image}) =>{
    return (
        <a href={link} target='_blank' className="socialIconLink">
        <img src={image} alt="" className="socialIcon" />
    </a>
    )
}



export default Topbar