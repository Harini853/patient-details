import React from 'react'
import Navbar from '../Navbar/Navbar'
import './RegisterPage.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const RegisterPage = () => {
  const [name,setName] = useState('')
  const [gender,setGender] = useState('')
  const [age,setAge] = useState('')
  const [blood,setBlood] = useState('')
  const [phone,setPhone] = useState('')
  const [disease,setDisease] = useState('')
  const[prescription,setPrescription]=useState(null)
  const[medicine,setMedicine]=useState('')
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault() 
    const formData= new FormData()
    formData.append('name',name)
    formData.append('gender',gender)
    formData.append('age',age)
    formData.append('blood',blood)
    formData.append('phone',phone)
    formData.append('disease',disease)
    formData.append('photo',prescription)
    formData.append('medicine',medicine)
    const config=  {
      headers:{
          'Content-Type':'multipart/form-data'
      }
  }
  await axios.post('http://localhost:8080/details',formData,config)
     alert('Details are Sumbitted successfully..!!')
     navigate('/Details')
    }
  return (
    <div> 
        <Navbar/>
          <div className="App my-5 ">
          <i class="fa-solid fa-stethoscope"></i>
     <div className='container login-container'>
          <div className='row my-5 l1'>
              <div className="col-lg-6 offset-lg-3">
                  <div className="card shadow ">
                      <div className="card-body l2"> 
                      {/* <h2 className="text-center mb-3">Register</h2> */}
                                <form className='row g-2 ' >
                                    <div className='mb-3 col-6'>
                                        <label className="form-label">Name:</label>
                                        <input type="text" placeholder='Full Name' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className='mb-3 col-6'>
                                        <label className="form-label">Gender:</label> <br />

                                      <input type="radio" checked={gender==='male'} value='male'
                                      onChange={e=>setGender(e.target.value)}
                                      className='form-check-input'/>Male 
                                      <span className="mx-3"></span>
                                      <input type="radio"
                                      checked={gender==='female'} value='female'
                                      onChange={e=>setGender(e.target.value)}
                                      className='form-check-input' />Female
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Age:</label>
                                        <input type="text" placeholder='Age' className="form-control"  value={age} onChange={e => setAge(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Blood Group:</label>
                                        <select className='form-select'  defaultValue="O+" id="" value={blood} onChange={e => setBlood(e.target.value)}>
                                          <option value="O+">O+</option>
                                          <option value="A+">A+</option>
                                          <option value="B+">B+</option>
                                          <option value="AB+">AB+</option>
                                          <option value="O-">O-</option>
                                          <option value="A">A-</option>
                                          <option value="B">B-</option>
                                          <option value="AB-">AB-</option>
                                        </select>
                                    </div>
                                  
                                    <div className="mb-3 col-6 ">
                                        <label className="form-label">Phone no:</label>
                                        <input type="text" placeholder='Phone' className='form-control' value={phone} onChange={e => setPhone(e.target.value)}   />
                                    </div>
                                    <div className='mb-3 col-6 '>
                                          <label className="form-label">Disease:</label>
                                          <input type="text" placeholder=''   className='form-control' value={disease} onChange={e => setDisease(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Prescription Image:</label>
                                        <input type="file" className='form-control' onChange={e => setPrescription(e.target.files[0])} />
                                    </div>        
                                 
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Medicine:</label>
                                        <input type="text" placeholder=' ' className='form-control' value={medicine} onChange={e => setMedicine(e.target.value)}/> 
                                    </div>        
                                 
                                   
                                 
                                  <div className='curd'>
                                  
                                  <button className='btn btn-primary d-grid gap-6 g1'  onClick={handleSubmit}>

                                  <Link to='/Register' className='l-container'  style={{fontSize:"25px"}}>Add</Link> 
                                          
                                  </button>
                                  <button className='btn btn-success d-grid gap-6 g2'>
                                  <Link to='/Details' className='l-container' style={{fontSize:"25px"}}>Show</Link> 
                                          {/* <button className="btn btn-primary ">Update</button>
                         */}
                                  </button>

                                  </div>
                          </form>
                       </div>
                    </div>
                  </div>
              </div>
          </div>
    </div>

    </div>
  )
}

export default RegisterPage