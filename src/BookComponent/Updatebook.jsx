import {React} from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import './Updatebook.css';


function Updatebook()
{
    const {id}=useParams()

    const [bookname,setBookname]=useState('')
    const [author,setAuthor]=useState('')
    const [isbn,setIsbn]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')

    const navigate=useNavigate();

    useEffect(()=>
    {

        const fetchdata=async()=>
        {
            try{
                const response=await axios.get("http://localhost:3001/getBooks/"+id);
                console.log(response);
                setBookname(response.data.bookname)
                setAuthor(response.data.author)
                setIsbn(response.data.isbn)
                setPrice(response.data.price)
                setDescription(response.data.description)
            }
            catch(err)
            {
                console.log(err);
            }
        }
    fetchdata();
        
    },[])

    const handleUpdate=(e)=>
    {
        e.preventDefault();
        axios.put("http://localhost:3001/bookupdate/"+id,{bookname,author,isbn,price,description})
        .then(res=>{
            console.log(res);
            navigate('/Home')
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <div className="update1">Update Book</div>
            <div className="div16">
                <form onSubmit={handleUpdate}>
                    <div className="div17">
                        <div>
                            <label className="label6">Bookname</label>
                            <input type="text" placeholder="Bookname" name="bookname" className="input6"
                            value={bookname} onChange={(e)=>setBookname(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="label6">Author</label>
                            <input type="text" placeholder="Author name" name="author" className="input6"
                            value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="label6">Isbn</label>
                            <input type="number" placeholder="isbn" name="isbn" className="input6"
                            value={isbn} onChange={(e)=>setIsbn(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="label6">Price</label>
                            <input type="number" placeholder="price" name="price" className="input6"
                            value={price} onChange={(e)=>setPrice(e.target.value)}></input>
                        </div>

                        <div>
                            <label className="label6">Description</label>
                            <input type="text" placeholder="Description" name="description" className="input6"
                            value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                        </div>
                    </div>
                    <div><button type="submit" className="edit1">Edit</button></div>
                </form>

            </div>
        </div>

    );
}
export default Updatebook;