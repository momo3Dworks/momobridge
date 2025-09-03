import React from 'react';
import {DefaultPLayer as Video} from 'react-html5video';
import video from '../assets/lux.mp4';
import LogoLazy from '../assets/LogoLazy.jpg';



const videoUno = () => {
    
    return (
        <Video autoPlay loop muted
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        poster="http://sourceposter.jpg"
        onCanPlayThrough={() => {
            // Do stuff
        }}>
        <source src={video} type="video/webm" />
       
    </Video>
    );
};

export default videoUno;