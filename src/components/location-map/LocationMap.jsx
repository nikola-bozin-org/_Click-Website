import React from 'react'
import './locationMap.css'

const LocationMap = ({ mapId }) => {
    return (
        <div className='map'>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="gmap_iframe" src={mapId}></iframe>
                </div>
            </div>
        </div>
    )
}

export default LocationMap