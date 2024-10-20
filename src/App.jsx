import React from 'react'
import Header from './components/Header/Header'
import Welcome from './pages/Welcome/Welcome'
import Footer from './components/Footer/Footer'
import Partner from './pages/Partner/Partner'
import Booking from './pages/Booking/Booking'
import Dishes from './pages/Dishes/Dishes'
import Ambience from './pages/Ambience/Ambience'
import Delivery from './pages/Delivery/Delivery'

function App() {
  return (
    <>
    <Header/>
    <Welcome/>
    <Partner/>
    <Booking/>
    <Dishes/>
    <Ambience/>
    <Delivery/>
    <Footer/>
    </>
  )
}

export default App
