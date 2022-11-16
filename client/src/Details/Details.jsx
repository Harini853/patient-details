import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Details = () => {
  const navigate=useNavigate()
  const[dis,setDis]=useState(false)
  const[store,setStore]=useState(null)
  const getdata=async()=>{
  const {data}=await axios.get('http://localhost:8080/details')
  setStore(data)
  }
  useEffect(()=>{
    getdata()
  })
  useEffect(()=>{
    if(store){
      setDis(true)
    }
  },[store])
  const handleDelete = async(e,id)=>{
    e.preventDefault()
    setDis(false)
    try {
      const {data}=await axios.delete(`http://localhost:8080/${id}`)
      getdata()
      setDis(true)
    } catch (error) {
      alert(error)
    }
  }
  const handleEdit=(e,id)=>{
    e.preventDefault()
    navigate(`/Edit/${id}`)
  }
 
 return (
    <div>
       {/* {!dis ? 'loading':
      //  <div>
      //   {store.map(s=>(
      //  <h2> {s.name}</h2>  
      //   ))}
      //   </div>
        
        } */}
        <div>
          <Navbar/>
        </div>

        {!dis ? 'loading':
          <div className='row mx-4 my-5'>
            {store.map(s=>(
              <div className='col-3 my-3' key={s._id}>
                  <div className="card shadow">
                    <img src={s.prescription} alt="" className="card-img-top" height="200px" width="100%" />
                    <div className="card-body">
                      <h2 className="display-4">{s.name}</h2>
                      <p>Gender : {s.gender}</p>
                      <p>Blood Group : {s.blood}</p>
                      <p>Phone : {s.phone}</p>
                      <p>Disease : {s.disease}</p>
                      <p>Medicine : {s.medicine}</p>
                      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                        <button onClick={e=>handleEdit(e,s._id)} className='btn btn-warning'>Edit</button>
                        <button onClick={e=>handleDelete(e,s._id)}className='btn btn-danger'>Delete</button>
                      </div>
                    </div>
                  </div>
              </div>
            ))
          } 
          </div>
        }
    </div>
  )
}

export default Details