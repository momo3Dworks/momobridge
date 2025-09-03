import React from 'react';
import ReactPlayer from 'react-player'
import {DefaultPLayer as Video} from 'react-html5video';





const Monarch = () => {
    
    return (
        <div className='notRotate'>
         
         <ReactPlayer url='https://www.youtube.com/shorts/y8U6QTc3BFQ' autoPlay loop playsinline='playsinline' controls='false' muted playing='true' width="100%" height={700} />
        </div>
    );
};

export default Monarch;