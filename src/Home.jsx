import {React} from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import './Style/Home.css';
import {Link} from 'react-router-dom';

function Home()
{
    const[users,setUsers]=useState([]);
    const[data,setData]=useState([]);

    const[bookname,setBookname]=useState()
    const[author,setAuthor]=useState()
    const[isbn,setIsbn]=useState()
    const[price,setPrice]=useState()
    const[description,setDescription]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/bookcreate",{bookname,author,isbn,price,description})
        .then(booklist=>console.log(booklist.data))
        .catch(err=>console.log(err))
    }

    /*useEffect(()=>{

            axios.get("http://localhost:3001/getbooks")
            .then(users=>setUsers(users.data))
            .catch(err=>console.log(err))

    })*/

    const handleDelete=(id)=>{

            axios.delete("http://localhost:3001/deletebook/"+id)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
    }


    useEffect(()=>{
        axios.get("http://localhost:3001/getbooks")
        .then(res=>{
                setUsers(res.data)
                setData(res.data)
            })
        .catch(err=>console.log(err))
    },[])

    const Filter=(event)=>{
        setUsers(data.filter(f=>f.bookname.toLowerCase().includes(event.target.value)))
    }

    return(
    <div>
        <div className="div11">
            <h2 className="header4">
                Book Management System 
            </h2>
            <div>
                
                <button className="logout1"><Link to="/login" className="logout2">Logout</Link></button>
            </div>
        </div>
        <div>
            <div className="div8">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label4">BookName: </label>
                        <input type="text" className="input4" placeholder="bookname" name="bookname"
                        onChange={(e)=>setBookname(e.target.value)} required></input>
                    </div>

                    <div>
                        <label className="label4">Author: </label>
                        <input type="text" className="input4" placeholder="author" name="author"
                        onChange={(e)=>setAuthor(e.target.value)} required></input>
                    </div>

                    <div>
                        <label className="label4">Isbn:</label>
                        <input type="number" className="input4" placeholder="isbn" name="isbn"
                        onChange={(e)=>setIsbn(e.target.value)} required></input>
                    </div>

                    <div>
                        <label className="label4">Price:</label>
                        <input type="number" className="input4" placeholder="price" name="price"
                        onChange={(e)=>setPrice(e.target.value)} required></input>
                    </div>

                    <div>
                        <label className="label4">Description:</label>
                        <input type="text" className="input4" placeholder="Description" name="description"
                        onChange={(e)=>setDescription(e.target.value)} required></input>
                    </div>

                    <div className="div9">
                        <button type="submit" className="submit1">Add Book</button>
                    </div>
                    
                </form>
                    

            </div>


        </div>

        <div>
            <h2 className="header5">ALL BOOKS LIST</h2>
        </div>
            <div>
                <input type="text" style={{marginLeft:"550px",fontSize:"30px"}}onChange={Filter} placeholder="search"/>
            </div>
        <div>
            <div className="div10">
                <table border="1" cellpadding="15px" className="table1">
                    <thead className="thead1">
                        <tr>
                            <td>Bookname</td>
                            <td>Author</td>
                            <td>Isbn</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td colspan="2">Update/Delete</td>
                        </tr>
                    </thead>

                    <tbody className="tbody1">
                    {
                        users.map((user,index)=>{
                           return <tr key={index}>
                                <td>{user.bookname}</td>
                                <td>{user.author}</td>
                                <td>{user.isbn}</td>
                                <td>{user.price}</td>
                                <td>{user.description}</td>

                                <td ><a href={"bookupdate/"+user._id}  className="td1">Update</a></td>
                                <td ><button onClick={()=>handleDelete(user._id)} className="td2">Delete</button></td>
                            </tr>
                        })
                    }   
                    </tbody>
                </table>
            </div>
        </div>
    </div>


    );
}
export default Home;