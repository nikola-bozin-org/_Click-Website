import React from 'react'
import './footer.css'
import nbLogo from '../../images/click/nikola-bozin-logo.png'
import vaLogo from '../../images/click/view-apartments-logo.png'
import oxford from '../../images/click/oxford.png'
const Footer = () => {
  return (
    <div data-aos='fade-in' className='footer'>
        <div className="poweredBy">
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

export default Footer