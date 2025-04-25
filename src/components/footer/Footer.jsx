import React from 'react'
import './footer.css'
import nbLogo from '../../images/click/nikola-bozin-logo.png'
import vaLogo from '../../images/click/view-apartments-logo.png';
import oxford from '../../images/click/oxford.png'
const Footer = () => {

  const navigate = (e,website)=>{
    e.preventDefault();
    window.open(website,'_blank','noopener,noreferrer');
  }

  return (
    <div data-aos='fade-in' className='footer'>
        <div className="poweredBy">
      </div>
    </div>
  )
}

export default Footer
