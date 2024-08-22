import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Style/Signup.css';

function Signup()
{
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[passward,setPassward]=useState()

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
         axios.post("http://localhost:3001/register",{name,email,passward})
        .then(result=>{ console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))

    }

    return (
        <div className="background1">
            <div>
                <div className="header1">
                    <h2>Sign Up</h2>
                </div>

                <div className="div1">
                    <form onSubmit={handleSubmit}>
                        <div className="div2">
                            <div className="div3">
                                <label className="label1"><strong>Name</strong></label>
                                <input type="text" className="input1" placeholder="Enter Name" name="name" 
                                onChange={(e)=>setName(e.target.value)} required></input>
                            </div>

                            <div className="div3">
                                <label className="label1"><strong>Email</strong></label>
                                <input type="email" className="input1" placeholder="Enter Email" name="email"
                                onChange={(e)=>setEmail(e.target.value)} required></input>
                            </div>

                            <div className="div3">
                                <label className="label1"><strong>Passward</strong></label>
                                <input type="passward" className="input1" placeholder="Enter Passward" name="passward"
                                onChange={(e)=>setPassward(e.target.value)} required></input>
                            </div>

                            <div>
                                <button type="submit" className="register1">Register</button>
                                <p>Already have account!!</p>  
                                <button className="login1"><Link to="/login" className="link1">Login</Link></button>
                                <button className="adminlogin1"><Link to="/adminlogin" className="link1">AdminLogin</Link></button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        
        </div>

    );
}
export default Signup;