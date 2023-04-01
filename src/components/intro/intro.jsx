import React from 'react'
import './intro.css'
import nbLogo from '../../images/click/nikola-bozin-logo.png'
import vaLogo from '../../images/click/view-apartments-logo.png'
import clickLogo from '../../images/click/clickLogo.png'
import oxford from '../../images/click/oxford.png'

const Intro = () => {
  return (
    <div className='intro'>
        <p data-aos-delay="500" data-aos="fade-up" className="click">
            Click E-Sports
        </p>
        <img  data-aos-delay="800" data-aos="fade-up" src={clickLogo} alt="" className="clickLogo" />
        <p  data-aos-delay="800" data-aos="fade-up" className="ultimativni">Ultimativni E-Sports Centar!</p>
        <div data-aos-delay="1100" data-aos="fade-in" className="poweredBy">
        <p  className="poweredByText">Powered by:</p>
        <div className="powerByImages">
         <img src={nbLogo} alt="" className="poweredByImage nikolaBozin" />
         <img src={vaLogo} alt="" className="poweredByImage vaLogo" /> 
         <img src={oxford} alt="" className="poweredByImage oxfordLogo" /> 
        </div>
      </div>
    </div>
  )
}

export default Intro