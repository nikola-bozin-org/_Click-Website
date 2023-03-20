import React from 'react'
import Topbar from '../components/Topbar/Topbar'
import TopbarMobile from '../components/Topbar/TopbarMobile'
import MainClickImages from '../../src/components/main-click-images/MainClickImages'
import SiteInDevelopment from '../components/site-in-development/SiteInDevelopment'
import Intro from '../components/intro/intro';

const Homepage = () => {

  return (
    <>
      <MainClickImages />
    <div className="homepage">
        <Topbar />
        <TopbarMobile/>
        <Intro/>
        <SiteInDevelopment/>
    </div>
    </>
  )
}

export default Homepage