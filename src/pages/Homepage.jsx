import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import TopbarMobile from '../components/Topbar/TopbarMobile'
import MainClickImages from '../../src/components/main-click-images/MainClickImages'
import SiteInDevelopment from '../components/site-in-development/SiteInDevelopment'
import Intro from '../components/intro/intro';
import Information from '../components/information/Information'
import LineGradient from '../components/line-gradient/LineGradient'
import LeftSection from '../components/left-section/LeftSection'
import RightSection from '../components/right-section/RightSection'

import click3 from '../images/click/click3.png'

const Homepage = () => {

  return (
    <>
      <MainClickImages />
    <div className="homepage">
        <Topbar />
        <TopbarMobile/>
        <Intro/>
        <Information/>
        <LineGradient/>
        <LeftSection image={click3} title={"Cekamo te"}
         text={`da ostvaris svoje najbolje gejming trenutke!
                Otvoreni smo svakog dana od 10:00 do 03:00. 
                Sve te ceka spremno!
                Vezuj se, dzojstik u ruke i polecemo!`
                }/>
        <LineGradient/>
        {/* <RightSection/>
        <LineGradient/> */}
        <SiteInDevelopment/>
    </div>
    </>
  )
}

export default Homepage