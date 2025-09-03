import React from 'react';
import {DefaultPLayer as Video} from 'react-html5video';
import MoMoBack from '../assets/MoMoBack.mp4';
import LogoLazy from '../assets/LogoLazy.jpg';



const MoMoBackIntern = () => {
    
    return (
        <div>
             
           <video className='video' autoPlay loop muted >
          
            <source src={MoMoBack} type='video/mp4'  />
           </video>
        </div>
    );
};

export default MoMoBackIntern;