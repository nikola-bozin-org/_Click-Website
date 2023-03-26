import React from 'react'
import './intro.css'
import clickLogo from '../../images/click/clickLogo.png'
import clickNekretnine from '../../images/click/clickNekretnine.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div data-aos-delay="300" data-aos="fade-up" className="poweredBy">
        {/* <p className="poweredByText">Powered by:</p> */}
         {/* <img src={clickNekretnine} alt="" className="poweredByImage" /> */}
         {/* <img src={clickLogo} alt="" className="poweredByImage" />  */}
      </div>
        <p data-aos-delay="500" data-aos="fade-up" className="click">
            Click E-Sports
        </p>
        <img  data-aos-delay="800" data-aos="fade-up" src={clickLogo} alt="" className="clickLogo" />
        <p  data-aos-delay="800" data-aos="fade-up" className="ultimativni">Ultimativni E-Sports Centar!</p>
    </div>
  )
}

export default Intro