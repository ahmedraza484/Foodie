import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import AboutUs from '../../Components/About/AboutUs'
import OurTeam from '../../Components/OurTeam/OurTeam'
import Reservation from '../../Components/Reservation/Reservation'
import Qualities from '../../Components/Qualities/Qualities'
import Menu from '../../Components/Menu/Menu'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Qualities />
      <Menu />
      <OurTeam />
      <Reservation />
    </>
  )
}

export default Home