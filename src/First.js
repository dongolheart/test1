import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './components/Second'

const Firstpage = () => {
  return (
    <>
    <Navbar/>
     <h1 className='custom-color' style={{backgroundColor:"yellow",color:"blue"}}>   This is first page</h1>
     <Footer/>
    </>
    
  )
}

export default Firstpage