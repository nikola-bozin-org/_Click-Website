import React from 'react'
import './brandIconLink.css'


const BrandIconLink =({link,image,customClassName})=>{
    return (
        <a href={link} target='_blank' className="brandIconLink">
        <img src={image} alt="" className={`brandIcon ${customClassName}`} />
    </a>
    )
}


export default BrandIconLink