import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/Pages/About'
import Blogs from './components/Pages/Blogs'
import Cart from './components/Pages/Cart'
import Deals from './components/Pages/Deals'
import Home from './components/Pages/Home'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import Contact from './components/Pages/Contact'

const MyRoutes = () => {
  return (
    
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Deals/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    
  )
}

export default MyRoutes