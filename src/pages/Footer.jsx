import React from 'react';
import TwitterIcon from '../assets/twitter.svg';
import TelegramIcon from '../assets/telegram.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { useGlitch } from 'react-powerglitch'
import { Slide } from "react-awesome-reveal";
import video from '../assets/lux.mp4';
import VideoLacra from '../components/Video';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Footer = () => {

   

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


      
          
      
          const glitcho = useGlitch(
 
            );
            const glitchA = useGlitch(
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

    return (
        <div>
            <Slide className='footer' direction='up'>
            <div className='ForeverVideo'>
                <div className='insideVideoOfTheMonth' ref={glitchA.ref}  >Render of the Month<WorkspacePremiumIcon style={{maxHeight:'0.7em'}}/></div>
              <VideoLacra/></div>
                <div className='forGiro'>
                    <div className='MoMoSocials' ><Link  ref={glitch.ref} to="https://www.instagram.com/momo3dworks/" target='blank_' ><InstagramIcon  fontSize='large'/></Link></div>
               
                    <div className='Giro'></div>
                    <div className='Giro2' ></div>
                    
                    <p className='footerText'  >MoMo Works Domain 2024 & Beyond. All Rights Reserved.</p>
                </div>
            </Slide>
        </div>
    );
};

export default Footer;