import { useContext, useState } from 'react'
import './App.css'
import { Context } from './components/Auth/Context'
import { Route, Routes } from 'react-router-dom'
import { AllRoutes } from './components/Routes/AllRoutes'
import  Shop  from './components/Shop/Shop'
import { Cart } from './components/Shop/Cart'
import  Search1  from './components/SearchArt/Search1'
import { Login } from './components/Login&Payment/Login'
import { Signup } from './components/Login&Payment/Signup'
import { Checkout } from './components/Login&Payment/Checkout'
function App() {

  const {isAuth} = useContext(Context)

  return (
    <>
      <Routes>
        <Route path='/' element={<AllRoutes/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/search' element={<Search1/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

      </Routes>
    </>
  )
}

export default App
