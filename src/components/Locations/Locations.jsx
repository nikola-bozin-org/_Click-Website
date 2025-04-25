import React, { useContext } from 'react'
import './locations.css'
import Location from '../location/Location'

import click5 from '../../images/click/click5.png'
import click1 from '../../images/click/click1.png'
import { SidebarContext } from '../../contexts/sideBarContext'


const Locations = () => {
  const {lokacijeRef} = useContext(SidebarContext);
  return (
    <div style={{color:'white'}} ref={lokacijeRef} className='locations'>
      <p data-aos='fade-in' style={{color:'white', width:'100%', textAlign:'center',fontSize:'40px'}} className="lokacijeText">Lokacije</p>
      <Location slikaLokacijaIgraonica={click5} grad={'Niš'} ulica={'Obrenovićeva 12'} info={'TC Gorča'} mapId={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.84079942141875!2d21.895086742614!3d43.31998668084233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b1f1ab55b067%3A0x5ecbb68a26a8023c!2sClick%20E-Sport!5e0!3m2!1sen!2srs!4v1745579308368!5m2!1sen!2srs"} />
      <Location slikaLokacijaIgraonica={click1} grad={'Prokuplje'} ulica={'Ratka Pavlovica'} info={'19/a'} mapId={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2906.7592994100073!2d21.588498!3d43.23550600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755c2220a5f9a0f%3A0xce5fa378cc407982!2sRatka%20Pavlovic%CC%81a%2019%2C%20Prokuplje!5e0!3m2!1sen!2srs!4v1745579584326!5m2!1sen!2srs"}/>
      <p data-aos='fade-in' style={{marginTop:'50px',fontSize:'30px' textAlign:'center'}} className="VidimoSe">Rezervisi svoje mesto na vreme! +381637520646</p>
      <p data-aos='fade-in' style={{marginTop:'50px',fontSize:'30px'}} className="VidimoSe">Vidimo se u Click-u!</p>
    </div>
  )
}

// https://blog.hubspot.com/website/how-to-embed-google-map-in-html

export default Locations
