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
import Locations from '../components/Locations/Locations'
import SideBar from '../components/side-bar/SideBar'

const Homepage = () => {

  return (
    <>
      <MainClickImages />
      <SideBar/>
    <div className="homepage">
        <Topbar />
        <TopbarMobile/>
        <Intro/>
        <Information/>
        <LineGradient/>
        <LeftSection 
        image={click1}
        title={"Cekamo te"}
        text={`da ostvaris svoje najbolje gejming trenutke!
                Otvoreni smo svakog dana od 10:00 do 03:00. 
                Sve te ceka spremno!
                Vezuj se, dzojstik u ruke i polecemo!`
                }/>
        <LineGradient/>
        <RightSection
        image={click2}
        title={"Click Esports Dota 2"}
        text={`je uzbudljiva nocna akcija gejmera  nepokolebljivog mindset-a!
        Sa timom od 5 igraca, osvoji posebne benefite Click-a, i zauzmite svoju poziciju kao jedan od najboljih timova ove neverovatne igre!
        Nemoj da propustis ultimativno Dota 2 iskustvo!`
                }/>
        <LineGradient/>
        <LeftSection 
        image={click3}
        title={"Turniri"}
        text={`Podigni svoje gejming iskustvo na profesionalni nivo.
        Upoznaj novo drustvo u Click-u, napravite tim, i zakoracite u svet neprestane borbe za pobedom!
        Pro Room Click-a je spreman da uz mocnu opremu ti omoguci da je tvoja jedina briga da pobedis partiju!`
                }/>
        <LineGradient/>
        <RightSection
        image={click4}
        title={"Rodjendani"}
        text={`Tvoj dan je dosao! Ucini ga jedinstvenim i nezaboravnim!
        Proslavi rodjendan na gejmerski nacin!
        Zapocni svoju rodjendansku zabavu i zakoraci u elitne prostorije Click Esport-a.
        Budi MVP i lider tvog rodjendana i pokazi svima sta znaci biti PRO!
        Nezaboravna secanja i najlepsa druzenja te cekaju!`
                }/>
        <LineGradient/>
        <Locations/>
        <SiteInDevelopment/>
    </div>
    </>
  )
}

export default Homepage