import React from 'react';
import ReactPlayer from 'react-player'
import {DefaultPLayer as Video} from 'react-html5video';





const CarReveal = () => {
    
    return (
        <div className='notRotate'>
         
         <ReactPlayer url='https://www.youtube.com/watch?v=Im7BxjbX16c' autoPlay playsinline='playsinline' loop controls='false' muted playing='true' width="100%" height={700} />
        </div>
    );
};

export default CarReveal;