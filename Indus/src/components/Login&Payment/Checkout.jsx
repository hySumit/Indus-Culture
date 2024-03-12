import React, { useContext } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Context } from '../Auth/Context'
import Shop2 from '../Shop/Shop2'
import Checkout2 from '../Shop/CheckoutLast'

export const Checkout = () => {
    const {isAuth} = useContext(Context);


  return (
    <div>
        <Navbar/>
        <div className="main">

        <Checkout2/>
        </div>
        <Footer/>
    </div>
  )
}
