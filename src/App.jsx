import { useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Adminlogin from './Adminlogin';
import Adminspace from './Adminspace';
import Updateuser from './Updateuser';
import Updatebook from './BookComponent/Updatebook';
import Pdf from './Pdf';
import Search from './Search';
import Recaptcha from './Recaptcha';
import Captcha from './Captcha';
import ReactPlayer from './ReactPlayer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() 
{
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>

        <Router>
          <Routes>
            <Route path="/register" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/adminlogin" element={<Adminlogin/>}></Route>
            <Route path="/adminspace" element={<Adminspace/>}></Route>
            <Route path="/update/:id" element={<Updateuser/>}></Route>
            <Route path="/bookupdate/:id" element={<Updatebook/>}></Route>
            <Route path="/pdf" element={<Pdf/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
            <Route path='/Recaptcha' element={<Recaptcha/>}></Route>
            <Route path='/captcha' element={<Captcha/>}></Route>
            <Route path='/reactplayer' element={<ReactPlayer/>}></Route>
          </Routes>



        </Router>



      </div>
    </div>
  )
}

export default App
