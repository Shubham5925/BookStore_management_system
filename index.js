const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const EmployeeModel=require('./models/Employee')
const bookModel=require('./models/Books')
const PdfModel=require('./models/Pdf')

const multer=require('multer')
const path=require('path')



const app=express()
app.use(express.json())
app.use(cors())

app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/employee");
//mongoose.connect("mongodb+srv://business5925:business5925@react-app.aoulijt.mongodb.net/?retryWrites=true&w=majority");


app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>
{
    
    const {email,passward}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.passward===passward){
                res.json("Success")
            }
            else{
                res.json("passward incorrect")
            }
        }
        else{
            res.send("No record go to register")
        }
    })
    .catch(err=>res.json(err))

})

app.post('/adminlogin',(req,res)=>
{
    const {email,passward}=req.body;
    EmployeeModel.findOne({email:email,passward:passward})
    .then(user=>{
        if(user){
            if(user.passward==="ss" && user.email==="ss@gmail.com"){
                res.json("Success")
            }
            else{
                res.json("passward incorrect")
            }
        }
        else{
            res.send("No record go to register")
        }
    })
})


app.get("/getuser",(req,res)=>
{
    EmployeeModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteuser/:id',(req,res)=>
{
    const id=req.params.id;
    EmployeeModel.findByIdAndDelete({_id:id})
    .then(response=>res.json(response))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>
{
   const id=req.params.id;
    EmployeeModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.put('/update/:id',(req,res)=>
{
    const id=req.params.id;
    EmployeeModel.findByIdAndUpdate({_id: id},{
        name:req.body.name,
        email:req.body.email,
        passward:req.body.passward})
    .then(user=>res.json(user))
    .catch(err=>console.log(err))
})


/*FROM HERE ROUTING OF BOOKS WILL START */

app.post('/bookcreate',(req,res)=>
{
    bookModel.create(req.body)
    .then(books=>res.json(books))
    .catch(err=>console.log(err))
})
app.get('/getbooks',(req,res)=>
{
    bookModel.find()
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})
app.get('/getBooks/:id',(req,res)=>{
    const id=req.params.id;
    bookModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.put('/bookupdate/:id',(req,res)=>
{
    const id=req.params.id;
    bookModel.findByIdAndUpdate({_id:id},{
        bookname:req.body.bookname,
        author:req.body.author,
        isbn:req.body.isbn,
        price:req.body.price,
        description:req.body.description})
    .then(user=>res.json(user))
    .catch(err=>console.log(err))
})

app.delete('/deletebook/:id',(req,res)=>{
    const id=req.params.id;
    bookModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>console.log(err))
})








const storage=multer.diskStorage(
{
    destination:(req,file,cb)=>{
        cb(null,'public/Images')
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }

})

const upload=multer({
    storage:storage
})
app.post('/upload',upload.single('file'),(req,res)=>{

    //console.log(req.file)

    PdfModel.create({image:req.file.filename})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))


})

app.get('/getImages',(req,res)=>{
    PdfModel.findOne({})
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})





app.listen(3001,()=>
{
    console.log("Server is running at:3001 port, api is running at 3001 port ")
})