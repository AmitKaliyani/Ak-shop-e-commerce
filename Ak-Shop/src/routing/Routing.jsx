import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Products from '../components/Products'
import PageNotFound from '../components/PageNotFound'
import Register from '../components/Register'
import Login from '../components/Login'
import Cart from '../components/Cart'
import ThankYou from '../components/ThankYou'

const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route  index element={<Home />} /> 
    <Route  path='home' element={<Home />} /> 
    <Route  path='about' element={<About />} /> 
    <Route  path='contact' element={<Contact />} /> 
    <Route  path='products' element={<Products />} /> 
    <Route  path='cart' element={<Cart />} /> 
    </Route>
   <Route  path='thankyou' element={<ThankYou/>} /> 
   <Route  path='register' element={<Register/>} /> 
   <Route  path='login' element={<Login />} /> 
   
    <Route path='/*' element={<PageNotFound/>} />
   </Routes>
  )
}

export default Routing
