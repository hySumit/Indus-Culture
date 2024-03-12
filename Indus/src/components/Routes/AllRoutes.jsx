import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Home1 } from '../Home/Home1'
import { GridCircles } from '../Home/GridCircles'
import { Home2 } from '../Home/Home2'
import { Card1 } from '../../HoveringCard/Card1'
import { Footer } from '../Footer/Footer'

export const AllRoutes = () => {
  return (
    <>
    <Navbar/>
    <Home1/>
    <Home2/>
    <Card1/>
    <Footer/>
    {/* <GridCircles/> */}
    </>
  )
}
