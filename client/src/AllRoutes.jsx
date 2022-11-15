import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import RegisterPage from './RegisterPage/RegisterPage'
import Details from './Details/Details'

const AllRoutes = () => {
  return (
    
         <Routes> 
            <Route path='/Home' element={<Home/>} />
           <Route path='/Register' element={<RegisterPage/>} />
           <Route path='/Details' element={<Details/>} />          
        </Routes>
    
  )
}

export default AllRoutes