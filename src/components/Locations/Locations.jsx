import React from 'react'
import './locations.css'
import Location from '../location/Location'

import click5 from '../../images/click/click5.png'


const Locations = () => {
  return (
    <div className='locations'>
      <p style={{color:'white', width:'100%', textAlign:'center',marginBottom:'30px',fontSize:'40px'}} className="lokacijeText">Lokacije</p>
      <Location slikaLokacijaIgraonica={click5} grad={'Nis'} ulica={'Obrenoviceva 12'} info={'TC Gorca'} />
    </div>
  )
}

export default Locations