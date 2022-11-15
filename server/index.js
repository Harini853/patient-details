const express = require('express')
const app = express()
const path=require('path')
const mongoose=require("mongoose")
const cors=require("cors")
const { storage, fileFilter } = require("./multer/upload")
const multer = require('multer');
const upload = multer({ limits: { fileSize: 2097152 }, fileFilter: fileFilter, storage: storage })
const Details=require('./models/details')
mongoose.connect('mongodb+srv://harini:harini@cluster0.uph5keq.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR", err.message)
})
app.use(express.static(path.join(__dirname, "/public")))


app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())

app.get('/',(req,res)=>{
    res.send('Medical Info')
})
app.get('/details',async(req,res)=>{
	try{
		const detail = await Details.find({})
		res.status(200).json(detail)
	}catch(err){
		res.status(500).send(err)
	}
})
app.post('/details',upload.single('photo'),async(req,res)=>{
    const {name,gender,age,blood,phone,disease,medicine}=req.body
    try {
        let prescription='http://localhost:8080'+req.file.path.substring(6)
        const details=new  Details({name,gender,age,blood,phone,disease,prescription,medicine})
    await details.save()
    res.status(200).json("Success")
    } catch (error) {
        console.log(error)
      res.status(500).send(error) 
    }
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=> console.log(`server is running on Port ${PORT}`))

