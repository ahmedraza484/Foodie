import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/About/AboutUs'
import OurTeam from './Components/OurTeam/OurTeam'
import Reservation from './Components/Reservation/Reservation'
import Qualities from './Components/Qualities/Qualities'
import Menu from './Components/Menu/Menu'
import NotFound from './Pages/NotFound/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/qualities' element={<Qualities />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/popular-dishes' element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App