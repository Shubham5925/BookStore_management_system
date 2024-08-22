import React from 'react';
import {useState} from 'react';

function Captcha()
{
    const [user,setUser]=useState({username:""});

    const characters='abcd1234';
    function generateString(length)
    {
        let result='';
        const charactersLength=characters.length;
        for(let i=0;i<length;i++)
        {
            result+=characters.charAt(Math.floor(Math.random()*charactersLength));
        }

        return result;

    }

    const captcha=generateString(4)//function called here and saved in captcha variable


    let handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        user[name]=value;
        setUser(user);
    }


    const onSubmit=e=>{
        var element=document.getElementById('successBtn');
        var inputData=document.getElementById('inputType');

        element.innerHTML="Checking...";
        inputData.disabled=true;
        element.disabled=true;

        var myfunctions=function()
        {
            if(captcha==user.username)
            {
                element.style.backgroundColor="white";
                element.innerHTML="captcha verified";
                element.style.color="red";
                element.style.cursor="not allowed";
                inputData.style.display="none";
            }
            else{
                element.innerHTML="captcha not verified";
                element.style.backgroundColor="red";
                element.disabled=true;
                var myfunction=function()
                {
                    element.innerHTML="verify captcha";
                    inputData.disabled=false;
                    element.disabled=false;
                    inputData.value='';
                };
                setTimeout(myfunction,1000);
            }
            
        }
        setTimeout(myfunctions,1000)
    };

    return(
        <div>
            
            <div>Validating Captcha</div>
            <div>
                <h3 id="captcha">{captcha}</h3>

            <input type="text" id="inputType" placeholder="Enter Captcha"
            name="username" onChange={handleChange} />

            <button type="button" id ="successBtn" onClick={onSubmit}>Verify Captcha</button>

            </div>

        </div>
    );
}
export default Captcha;