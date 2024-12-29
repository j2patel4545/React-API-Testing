import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/log' element={<Login/>}/>
      <Route path='/das' element={<Dashboard/>}/>
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
