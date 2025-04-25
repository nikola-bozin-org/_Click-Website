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

import click1 from '../images/click/click1.png'
import click2 from '../images/click/click2.png'
import click3 from '../images/click/click3.png'
import click4 from '../images/click/click4.png'
import click5 from '../images/click/click5.png'
import Locations from '../components/Locations/Locations'
import SideBar from '../components/side-bar/SideBar'
import { SidebarContext } from '../contexts/sideBarContext'
import { useContext } from 'react'
import Footer from '../components/footer/Footer'

const Homepage = () => {

  const {cekamoTeRef,dota2Ref,turniriRef,rodjendaniRef} = useContext(SidebarContext)

  return (
    <React.Fragment>
      <MainClickImages />
        <SideBar/>
    <div className="homepage">
        <Topbar />
        <TopbarMobile/>
        <Intro/>
        <LineGradient/>
        <Information/>
        <LineGradient/>
        <LeftSection 
        image={click5}
        title={"Čekamo te"}
        text={`da ostvariš svoje najbolje gejming trenutke!
                Otvoreni smo svakog dana od 09:00 do 03:00. 
                Sve te čeka spremno!`
                }
        refToUse={cekamoTeRef}
                />
        <LineGradient/>
        <Locations/>
        <Footer/>
    </div>
    </React.Fragment>
  )
}

export default Homepage
