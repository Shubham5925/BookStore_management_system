import {React} from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Style/Adminlogin.css';



function Adminlogin()
{
    const[email,setEmail]=useState()
    const[passward,setPassward]=useState()

    const navigate=useNavigate()

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        axios.post("http://localhost:3001/adminlogin",{email,passward})
        .then(res=>{
            if(res.data==="Success"){
                navigate('/adminspace')
            }
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <div>
            <h2 className="header3">
                Admin Login 
            </h2>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="div13">
                        <div className="div14">
                            <label className="label5"><strong>Admin Email</strong></label>
                            <input type="email" placeholder="Admin Email" name="email" className="input3"
                            onChange={(e)=>setEmail(e.target.value)} required></input>
                        </div>

                        <div className="div14">
                            <label className="label5"><strong>Admin Passward</strong></label>
                            <input type="passward" placeholder="Admin Passward" name="passward" className="input3"
                            onChange={(e)=>setPassward(e.target.value)} required></input>
                        </div>

                        <div>
                            <button type="Submit" className="adminlogin2">Admin Login</button>
                        </div>

                    </div>
                </form>
                        <div className="div15">
                            <div><Link to="/register" className="register3">Register</Link></div>
                            <div><Link to="/login" className="login3">Login</Link></div>

                        </div>
            </div>
        </div>

    );
}
export default Adminlogin;