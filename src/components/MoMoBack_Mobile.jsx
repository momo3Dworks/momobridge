import React from 'react';
import ReactPlayer from 'react-player'
import {DefaultPLayer as Video} from 'react-html5video';





const InfiniteVid = () => {
    
    return (
        <div className='video'>
         <div className='overlayVid'></div>
         <ReactPlayer url='https://www.youtube.com/shorts/eIEUPvhfh0g' autoPlay loop controls='false' muted playing='true' width="100%" height={700} />
        </div>
    );
};

export default InfiniteVid;