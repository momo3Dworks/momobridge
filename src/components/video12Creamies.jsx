import React from 'react';
import ReactPlayer from 'react-player'






const GPromo = () => {
    
    return (
        <div className='notRotate'>
         
         <ReactPlayer url='https://www.youtube.com/watch?v=EDapFDDeJWY' autoPlay loop playsinline='playsinline' controls='false' muted playing='true' width="100%" height={700} />
        </div>
    );
};

export default GPromo;