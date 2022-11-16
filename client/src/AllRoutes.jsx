import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import RegisterPage from './RegisterPage/RegisterPage'
import Details from './Details/Details'
import EditPage from './EditPage/EditPage'
const AllRoutes = () => {
  return (
    
         <Routes> 
            <Route path='/' element={<Home/>} />
           <Route path='/Register' element={<RegisterPage/>} />
           <Route path='/Details' element={<Details/>} />  
           <Route path='/Edit/:id' element={<EditPage/>}/>        
        </Routes>
    
  )
}

export default AllRoutes