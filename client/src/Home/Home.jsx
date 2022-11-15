import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='landing-page-container'>
        <div className='text-center'>
       <h1 className='p-container' >   WELCOME TO MEDICARE...!!!</h1><br/><br/>
       <p className='h-container'>It is simple to obtain 1,000 prescriptions, <br /> but it is more difficult to obtain a single remedy.</p><br/>
        </div><br/>
          
        <button className='  btn b-container'>
     <Link to='/Register' className=' l-container'>Get Started</Link>
     </button>
     </div>
    </div>
  )
}

export default Home