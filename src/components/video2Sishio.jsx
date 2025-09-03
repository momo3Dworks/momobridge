import React from 'react';
import ReactPlayer from 'react-player'
import {DefaultPLayer as Video} from 'react-html5video';





const Sishio = () => {
    
    return (
     
       <div className='notRotate'>
         <ReactPlayer  url='https://www.youtube.com/shorts/fSbQgXOugeQ' autoPlay loop playsinline='playsinline' controls='false' muted playing='true' width="100%" height={700}/>
         </div>
    );
};

export default Sishio;