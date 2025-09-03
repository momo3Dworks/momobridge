import React, {useEffect} from 'react';
import logoT from '../assets/MoMoWorksLogo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useGlitch } from 'react-powerglitch'
import { PowerGlitch } from 'powerglitch'; 
import Noise from './NoiseDittering';
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Topbar = () => {

    const customAnimation = keyframes`
  from {
    opacity: 0;

  }

  to {
    opacity: 1;
    
  }
`;
   
    const glitch = useGlitch(
        {
            "playMode": "hover",
            "createContainers": true,
            "hideOverflow": false,
            "timing": {
              "duration": 250,
              "iterations": 6
            },
            "glitchTimeSpan": {
              "start": 0,
              "end": 1
            },
            "shake": {
              "velocity": 15,
              "amplitudeX": 0.2,
              "amplitudeY": 0.2
            },
            "slice": {
              "count": 6,
              "velocity": 15,
              "minHeight": 0.02,
              "maxHeight": 0.15,
              "hueRotate": true
            },
            "pulse": false
          }
        );
       

        const menuItem=[
          {
             
              
              content:"On X" 
             
          },
        
        ]
        
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

     
      
    return ( 





      
        <div>
            <div>
           <div className='topbar'  data-aos="fade-down" >
           <Reveal delay={500} duration={2000} keyframes={customAnimation}><div><img className='topLogo'ref={glitch.ref}   src={logoT} alt='logo' /></div></Reveal>
           
           <Link to='https://x.com/MoMo3DWorks' target='blank_'>
           {
                   menuItem.map((item, index)=>(  
               <div>
               
                <button  ref={glitch.ref} className='topbutton' style={{fontWeight:'900'}}>Let's talk<div style={{ position:'absolute', 
                              fontSize:'0.5em', 
                              paddingRight:'0.5em', 
                              paddingLeft:'0.5em',
                              paddingTop:'0.2em',
                              bottom:'0%',
                              left:'0%', 
                              background:'black', 
                              color:'cyan', paddingRight:'2em', fontWeight:'500'}}>{item.content}<TwitterIcon  style={{maxHeight:'0.4em', padding:'0',position:'absolute', bottom:'0px', marginLeft:'-3px'}}/></div></button>
                </div> 
             
                ))
               }
           </Link>
            <Noise/>
            
           </div>
           
           </div>
        </div>
    ); 
};

export default Topbar;