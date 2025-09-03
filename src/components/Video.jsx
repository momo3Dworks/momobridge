import React from 'react';
import {DefaultPLayer as Video} from 'react-html5video';
import video from '../assets/MoMoBack.webm';
import LogoLazy from '../assets/LogoLazy.jpg';



const videoUno = () => {
    
    return (
        <div>
             
           <video muted className='video' autoPlay='autoplay' loop='loop' playsinline='playsinline' poster='../assets/Renders/MoMoforAccordion.webp' >
          
            <source muted src={video} type='video/webm'  />
           </video>
        </div>
    );
};

export default videoUno;