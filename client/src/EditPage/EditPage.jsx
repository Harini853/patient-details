import React,{useState} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
const EditPage = () => {
const navigate = useNavigate()

const {id}=useParams()
const [store,setData]=useState(null)
        const [dis,setDis]=useState(false)
      const [name,setName] = useState('')
  
  const [age,setAge] = useState('')
  const [blood,setBlood] = useState('')
  const [phone,setPhone] = useState('')
  const [disease,setDisease] = useState('')
  
  const[medicine,setMedicine]=useState('')
const getData=async()=>{
    const {data}=await axios.get(`http://localhost:8080/details/${id}`)
    setData(data)
    setName(data.name)
    
    setAge(data.age)
    setBlood(data.blood)
    setPhone(data.phone)
    setDisease(data.disease)
    setMedicine(data.medicine)
}
  useEffect(()=>{
    getData()
  },[])
  useEffect(()=>{
    if(store){
        setDis(true)
    }
  },[store])

    const handleSubmit=async(e)=>{
    e.preventDefault() 
   
   
  await axios.patch(`http://localhost:8080/${id}`,{name,age,blood,phone,disease,medicine})
     alert('Details are edited successfully..!!')
     navigate('/Details')
    }

  return (
    
   <div className="App my-5 ">
    {!dis ?'loading' :
    <>
          <i class="fa-solid fa-stethoscope"></i>
     <div className='container login-container'>
          <div className='row my-5'>
              <div className="col-lg-6 offset-lg-3">
                  <div className="card shadow">
                      <div className="card-body"> 
                      <h2 className="text-center mb-3">Register</h2>
                                <form className='row g-2 bg-info' >
                                    <div className='mb-3 col-6'>
                                        <label className="form-label">Name:</label>
                                        <input type="text" placeholder='Full Name' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                 
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Age:</label>
                                        <input type="text" placeholder='Age' className="form-control"  value={age} onChange={e => setAge(e.target.value)}/>
                                    </div>
                                    <div className="mb-3 col-6">
                                        <label className="form-label">Blood Group:</label>
                                        <select className='form-select'  defaultValue={blood} id=""  onChange={e => setBlood(e.target.value)}>
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
                                        <label className="form-label">Medicine:</label>
                                        <input type="text" placeholder=' ' className='form-control' value={medicine} onChange={e => setMedicine(e.target.value)}/> 
                                    </div>        
                                 
                                   
                                 
                                  <div className='curd'>
                                  
                                  <button className='btn btn-primary d-grid gap-6 g1'  onClick={handleSubmit}>

                              Edit
                                          
                                  </button>
                                

                                  </div>
                          </form>
                       </div>
                    </div>
                  </div>
              </div>
          </div>
</>}
    </div>

  )
}

export default EditPage