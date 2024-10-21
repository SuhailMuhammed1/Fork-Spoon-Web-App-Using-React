import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Dishes from '../pages/Dishes/Dishes'
import Booking from '../pages/Booking/Booking'


function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about-us' element={<Home/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
