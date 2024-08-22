import {React} from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Style/Adminspace.css';


function Adminspace()
{
    const[users,setUsers]=useState([]);

    useEffect(()=>{
    axios.get("http://localhost:3001/getuser")
    .then(users=>setUsers(users.data))
    .catch(err=>console.log(err))
    })

    const handleDelete=(id)=>
    {
        axios.delete("http://localhost:3001/deleteuser/"+id)
        .then(res=>{
            console.log(res)
        })  
        .catch(err=>console.log(err))
    }
    return(
        <div>

            <h2 className="header5">ADMIN DASHBOARD</h2>
            <div className="div19">
                <Link to="/register" className="newuser1">NewUser+</Link>
                <Link to="/login" className="logout4">Logout</Link>
            </div>
            <div className="div20">
                <table border="1" cellspacing="1" cellpadding="5" className="table2">
                    <thead className="thead3">
                        <tr>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>PASSWARD</td>
                            <td colspan="2">UPDATE/DELETE</td>
                        </tr>
                    </thead>
                    <tbody className="tbody2">
                    {
                        users.map((user,index)=>{
                            
                           return <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.passward}</td>
                                <td><a href={"update/"+user._id} className="update3">UPDATE</a></td>
                                <td><button onClick={()=>handleDelete(user._id)} className="delete3">DELETE</button></td>
                            </tr>
                        })
                        
                    }
                    </tbody>
                    

                </table>
            </div>

            <div><Link to="/pdf">Reach Pdf webpage</Link></div>


            <div><Link to='/search'>Search operation</Link></div>

            <div><Link to='/reactplayer'>React Player for video</Link></div>
        </div>
        
    );
}
export default Adminspace;