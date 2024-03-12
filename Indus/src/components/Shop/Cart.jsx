import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Auth/Context'
import { Navbar2 } from '../Navbar/Navbar2'
import Shop2 from './Shop2'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const{count,setCount} = useContext(Context)
 

  return (
    <>
    <Navbar2 count={count}/>
    <h1 className="text-2xl font-bold mt-5 mb-10" >Welcome to Cart</h1>
    <Shop2/>
    </>
  )
}
