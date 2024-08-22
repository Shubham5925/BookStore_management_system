import React from 'react';
import ReactPlayer from 'react-player';

function Reactplayer()
{
    return(

            <div>

                <div>
                    <h1>Hello</h1>
                    <ReactPlayer controls={true} url=" https://www.youtube.com/shorts/PQs-1uQPl4Y" height="500px" width="500px"/>
                </div>


            </div>

    ) 
}
export default Reactplayer;