const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    
    image:String
})

const PdfModel=mongoose.model("users",UserSchema)
module.exports=PdfModel;