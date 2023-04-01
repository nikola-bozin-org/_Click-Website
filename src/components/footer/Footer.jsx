import React from 'react'
import './footer.css'
import nbLogo from '../../images/click/nikola-bozin-logo.png'
import vaLogo from '../../images/click/view-apartments-logo.png'
import oxford from '../../images/click/oxford.png'
const Footer = () => {

  const navigate = (e,website)=>{
    e.preventDefault();
    window.open(website,'_blank','noopener,noreferrer');
  }

  return (
    <div data-aos='fade-in' className='footer'>
        <div className="poweredBy">
        <p  className="poweredByText">Powered by:</p>
        <div className="powerByImages">
         <img onClick={(e)=>{navigate(e,"https://www.nikolabozin.com")}} src={nbLogo} alt="" className="poweredByImage nikolaBozin" />
         <img onClick={(e)=>{navigate(e,"https://www.instagram.com/stan.na.dan.nis")}} src={vaLogo} alt="" className="poweredByImage vaLogo" /> 
         <img onClick={(e)=>{navigate(e,"https://www.oxford.rs")}} src={oxford} alt="" className="poweredByImage oxfordLogo" /> 
        </div>
      </div>
    </div>
  )
}

export default Footer