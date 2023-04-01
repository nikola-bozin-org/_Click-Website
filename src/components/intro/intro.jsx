import React from 'react'
import './intro.css'

import clickLogo from '../../images/click/clickLogo.png'

const Intro = () => {
  return (
    <div className='intro'>
        <p data-aos-delay="500" data-aos="fade-up" className="click">
            Click E-Sports
        </p>
        <img  data-aos-delay="800" data-aos="fade-up" src={clickLogo} alt="" className="clickLogo" />
        <p  data-aos-delay="800" data-aos="fade-up" className="ultimativni">Ultimativni E-Sports Centar!</p>
    </div>
  )
}

export default Intro