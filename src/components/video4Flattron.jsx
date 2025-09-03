import React from 'react';
import ReactPlayer from 'react-player'
import {DefaultPLayer as Video} from 'react-html5video';





const Flattron = () => {
    
    return (
        <div className='notRotate'>
         
         <ReactPlayer url='https://www.youtube.com/shorts/StXGdKhouPc' autoPlay loop playsinline='playsinline' controls='false' muted playing='true' width="100%" height={700} />
        </div>
    );
};

export default Flattron;