import React from 'react'
import './leftSection.css'



const LeftSection = ({image,title,text,refToUse}) => {
  return (
    <div ref={refToUse} data-aos='fade-up' className='leftSection'>
      <img data-aos-delay='500' data-aos='fade-left' src={image} alt="" className="leftSectionBackgroundImage" />
      <div className="leftSectionBackground">
        <div className="leftSectionBackgroundTexts">
        <p className='leftSectionBackgroundTitle'>{title}</p>
        <p className='leftSectionBackgroundText'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default LeftSection