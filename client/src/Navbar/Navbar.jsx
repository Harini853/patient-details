import React from 'react'
import {NavLink,useNavigate} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

<div class="container-fluid ">
<img src="https://icons.veryicon.com/png/o/business/circular-multi-color-function-icon/health-health.png" alt="" width="70" height="70"></img>
  <a class="navbar-brand px-5" style={{fontFamily:"roboto",fontSize:"40px"}} href="#">MEDICARE</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">

    <ul class="navbar-nav">
    <li class="nav-item">
        <NavLink className="nav-link px-5" aria-current="page" to="/Home" style={{fontFamily:"monospace",fontSize:"25px"}}> HOME</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link px-5" aria-current="page" to="/Register" style={{fontFamily:"monospace",fontSize:"25px"}}>REGISTER</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link px-5" to="/Details" style={{fontFamily:"monospace",fontSize:"25px"}}>DETAILS</NavLink>
      </li>
    </ul>
  </div>
</div>
</nav>
    </div>
  )
}

export default Navbar