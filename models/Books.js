const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    bookname:String,
    author:String,
    isbn:Number,
    price:Number,
    description:String,

})

const bookModel=mongoose.model('books',bookSchema)
module.exports=bookModel;
