import {React} from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';
import './Style/Updateuser.css';
function Updateuser()
{
    const {id}=useParams()

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [passward,setPassward]=useState('')
    const navigate=useNavigate()

    
    useEffect(()=>
    {
        const fetchdata=async()=>
        {
            try{
                    const response=await axios.get("http://localhost:3001/getUser/"+id);
                    console.log(response);
                    setName(response.data.name)
                    setEmail(response.data.email)
                    setPassward(response.data.passward)
                }catch(err){
                    console.log(err)
                }
            }
         fetchdata();
},[])

        
    
    const handleUpdate=(e)=>
    {
        e.preventDefault();
        axios.put("http://localhost:3001/update/"+id,{name,email,passward})
        .then(res=>{
            console.log(res);
            navigate('/Adminspace')
    })
    .catch(err=>console.log(err))
    }
    

    return(
        <div>
            <div className="div21">
                Update User Details
            </div>

            <div className="div22">
                <form onSubmit={handleUpdate}>
                    <div className="div23">Update User</div>
                    <div >   
                        <div>
                            <label className="label7">Name</label>
                            <input type="text" placeholder="Enter Name" name="name" className="input7"
                            value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="label7">Email</label>
                            <input type="email" placeholder="Enter Email" name="email" className="input7"
                            value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="label7">Passward</label>
                            <input type="passward" placeholder="Enter Passward" name="passward" className="input7"
                            value={passward} onChange={(e)=>setPassward(e.target.value)} ></input>
                        </div>

                        <div>
                            <button type="submit" className="update6">UPDATE</button>
                        </div>
                    </div>
                </form>
                    <div>
                        
                    </div>
            </div>
        </div>

    );
}
export default Updateuser