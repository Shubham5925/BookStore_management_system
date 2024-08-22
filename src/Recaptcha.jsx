//npm install react-google-recaptcha
//search google recaptcha on google/admin console
//6LeeTkopAAAAAALrSKlI265tN_7WDooVCqSTj2Oq

import React from 'react';
import {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; 

function Recaptcha()
{
    const [email,setEmail]=useState("")
    const [capval,setCapval]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(email)
    }
    return(
        <div>

            <div>
                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="email" value={email} 
                    onChange={(e)=>setEmail(e.target.value)} />

                    <ReCAPTCHA sitekey="6Ld7VEopAAAAAEAxFnLqaQo2Rh_1LPneDoZKatq9"
                    onChange={(val)=>setCapval(val)}/>

                    <button disabled={!capval}>Subscribe</button>    

                </form>
                
            </div>

            
        </div>

    );
}
export default Recaptcha;