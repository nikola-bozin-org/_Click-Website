import React from 'react'
import './location.css'
import LocationMap from '../location-map/LocationMap'

const Location = ({slikaLokacijaIgraonica,grad,ulica,info,mapId}) => {
  return (
    <div data-aos-offset='300' data-aos='fade-up' className='location'>
        <img src={slikaLokacijaIgraonica} alt="" className="slikaLokacije"/>
        <div className="opisLokacije">
          <p className="grad">
            {grad}
          </p>
          <p className="ulica">
            {ulica}
          </p>
          <p className="dodatanInfo">
            {info}
          </p>
        </div>
          <LocationMap mapId={mapId}/>
    </div>
  )
}

export default Location
