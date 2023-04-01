import React, { useContext } from 'react'
import './locations.css'
import Location from '../location/Location'

import click5 from '../../images/click/click5.png'
import { SidebarContext } from '../../contexts/sideBarContext'


const Locations = () => {
  const {lokacijeRef} = useContext(SidebarContext);
  return (
    <div style={{color:'white'}} ref={lokacijeRef} className='locations'>
      <p data-aos='fade-in' style={{color:'white', width:'100%', textAlign:'center',fontSize:'40px'}} className="lokacijeText">Lokacije</p>
      <Location slikaLokacijaIgraonica={click5} grad={'Nis'} ulica={'Obrenoviceva 12'} info={'TC Gorca'} />
      <p data-aos='fade-in' style={{marginTop:'50px',fontSize:'30px'}} className="VidimoSe">Vidimo se!</p>
    </div>
  )
}

export default Locations