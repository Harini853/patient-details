import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Details = () => {
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
          <div className="card" style="width: 18rem;">
          <img className="card-img-top" src={store.map(s=>(<p>{s.photo}</p>))} alt="Card image cap"/>
          <div className="card-body">
            <div className="card-text">{ store.map(s=>(<p>Patient Name:{s.name}</p>))}
            <div className="card-text">{ store.map(s=>(<p>Gender:{s.gender}</p>))}
            <div className="card-text">{ store.map(s=>(<p>Age:{s.age}</p>))}
            <div className="card-text">{ store.map(s=>(<p>Blood Group:{s.blood}</p>))}
            <div className="card-text">{ store.map(s=>(<p>Phone Number:{s.phone}</p>))}
            <div className="card-text">{ store.map(s=>(<p>Disease:{s.disease}</p>))}
            <div className="card-text">{ store.map(s=>(<p>Medicine:{s.medicine}</p>))}
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
            </div>
          </div>
        </div>
        }
    </div>
  )
}

export default Details