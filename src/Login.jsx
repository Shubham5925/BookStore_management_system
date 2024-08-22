import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Style/Login.css';

import ReCAPTCHA from 'react-google-recaptcha';
//6LeCU0opAAAAAIUezZXdyURyBXkSNg6xDL7ImCKp

function Login()
{
    const[email,setEmail]=useState()
    const[passward,setPassward]=useState()

    const [capval,setCapval]=useState(null)

    const navigate=useNavigate();

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        
        axios.post("http://localhost:3001/login",{email,passward})
        .then(res=>{
            if(res.data==="Success")
            {
                navigate('/home')
            }
           
        })
    
        .catch(err=>console.log(err))
    }

    return (
        <div className="background2">
            <h1 className="heading2">
                Login
            </h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="div6">
                        <div className="div7">
                            <label className="label2"><strong>Email</strong></label>
                            <input type="email" className="input2" placeholder="Enter Email" name="email" 
                            onChange={(e)=>setEmail(e.target.value)} required></input>
                        </div>


                        <div className="div7">
                            <label className="label2"><strong>Passward</strong></label>
                            <input type="passward" className="input2"placeholder="Passward" name="passward"
                            onChange={(e)=>setPassward(e.target.value)} required></input>
                        </div>

                        <ReCAPTCHA sitekey="6Ld7VEopAAAAAEAxFnLqaQo2Rh_1LPneDoZKatq9" 
                        onChange={(val)=>setCapval(val)}/>

                        <button type="Submit" disabled={!capval} className="login2" >Login</button>
                        <h3>Yet Not Registered ? Signup Below !!</h3>
                        <Link to="/register" className="signup2">SignUp</Link>
                    </div>
                    
                    
                    
                </form>
                
            </div>
        
        </div>

    );
}

export default Login;