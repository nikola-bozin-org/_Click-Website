import React from 'react'
import './rightSection.css'

const RightSection = ({image,title,text,refToUse}) => {
  return (
    <div ref={refToUse} data-aos='fade-up' className='rightSection'>
      <img data-aos-delay='500' data-aos='fade-right' src={image} alt="" className="rightSectionBackgroundImage" />
      <div className="rightSectionBackground">
        <div data-aos='fade-up' className="rightSectionBackgroundTexts">
          <p className="rightSectionBackgroundTitle">{title}</p>
          <p className="rightSectionBackgroundText">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default RightSection