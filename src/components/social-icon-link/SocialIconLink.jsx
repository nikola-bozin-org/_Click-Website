import React from 'react'
import './socialIconLink.css'

const SocialIconLink = ({link,image}) =>{
    return (
        <a href={link} target='_blank' className="socialIconLink">
        <img src={image} alt="" className="socialIcon" />
    </a>
    )
}

export default SocialIconLink