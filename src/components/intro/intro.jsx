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
        <div className='last'>
        <p style={{textAlign:'center'}} data-aos-delay="800" data-aos="fade-up" className="ultimativni">Ultimativni</p>
        <p  style={{textAlign:'center'}} data-aos-delay="800" data-aos="fade-up" className="ultimativni">E-Sports</p>
        <p  style={{textAlign:'center'}} data-aos-delay="800" data-aos="fade-up" className="ultimativni">Centar!</p>
        </div>
    </div>
  )
}

export default Intro
