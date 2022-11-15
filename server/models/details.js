const mongoose =require('mongoose')
const {Schema}=mongoose
const detailsSchema=new Schema(
    {name:String,
    gender:String,
    age:Number,
    blood:String,
    phone:Number,
    disease:String,
    prescription:String,
    medicine:String   
    })
module.exports=mongoose.model('Detail',detailsSchema)
