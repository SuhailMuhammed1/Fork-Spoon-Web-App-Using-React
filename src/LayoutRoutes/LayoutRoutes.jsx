import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Dishes from '../pages/Dishes/Dishes'
import Booking from '../pages/Booking/Booking'
import AboutUs from '../pages/AboutUs/AboutUs'
import NotFound404 from '../pages/NotFound404/NotFound404'
import Partner from '../pages/Partner/Partner'


function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/guides' element={<Partner/>}/>
            <Route path='/*' element={<NotFound404/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
