import React from 'react';
import ReactPlayer from 'react-player'
import {DefaultPLayer as Video} from 'react-html5video';





const MiamiPorsche = () => {
    
    return (
        <div className='notRotate'>
         
         <ReactPlayer className='reactVideo' url='https://www.youtube.com/watch?v=Euc3FUtl__g' autoPlay loop controls='false' muted playsinline='playsinline' playing='true' width="100%"  height={700} />
         </div>
    );
};

export default MiamiPorsche;