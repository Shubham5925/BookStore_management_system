import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import resume from './Images_img/resume.pdf';
import img from './Images_img/img1.jpg';
function Pdf()
{
    const [file,setFile]=useState()
    const [image,setImage]=useState([])

    const handleUpload=(e)=>{
    
        const formdata=new FormData()
        formdata.append('file',file)

    axios.post("http://localhost:3001/upload",formdata)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:3001/getImages")
        .then(res=>setImage(res.data.image))
        .catch(err=>console.log(err))
    },[])



    return(
        <div>
            <input type="file" onChange={e=>setFile(e.target.files[0])}/>
            <button onClick={handleUpload}>Upload</button>

            <br/>

            <img src={'http://localhost:3001/Images/'+image} alt=""/>

            <button><a href={resume} download="resume">download pdf</a></button>
            <button><a href={img} download="img download">donwload img</a></button>
        </div>
    );
}
export default Pdf;