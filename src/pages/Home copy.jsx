import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MoMoBack from '../components/MoMoBack';
import MoMoBackMobile from '../components/MoMoBack_Mobile';
import MoMoGallery from '../components/MoMoGallery';
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import MouseIcon from '@mui/icons-material/Mouse';
import LPC from '../assets/lux.mp4';
import Noise from '../components/NoiseDittering';
import { useGlitch } from 'react-powerglitch';
import { PowerGlitch } from 'powerglitch'; 
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Heart from '@mui/icons-material/FavoriteBorder';
import AnimationIcon from '@mui/icons-material/Animation';
import ComputerIcon from '@mui/icons-material/Computer';
import AccordeonHome from '../components/AccordeonHome';
import CancelIcon from '@mui/icons-material/Cancel';
import LockOpenIcon from '@mui/icons-material/LockOpen';




const Home = () => {


  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);


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

    const glitchoDos = useGlitch(
        {
            "playMode": "always",
            "createContainers": true,
            "hideOverflow": false,
            "timing": {
              "duration": 2850,
              "easing": "ease-in-out"
            },
            "glitchTimeSpan": {
              "start": 0.5,
              "end": 0.7
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

   
   


    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

    return (
       
        <div className='homeContainer'>
            <div className='ForeverVideo'>
                <button className='insideVideoOfTheMonth' ref={glitch.ref}  >Render of the Month</button>
                <ReactPlayer  url='https://www.youtube.com/watch?v=W5vmmOSIu7U' autoPlay loop controls='false' muted playing='true' width="100%"   /></div>
           <div className='HomeHero'><MoMoBack/><Noise/></div>
           <div className='HomeHeroMobile'><MoMoBackMobile/></div>

           <div style={{width:'100%'}} /* Home*/>

                <div className='ruby'>
                    <h2><span ref={glitcho.ref}>Welcome <Heart/></span></h2>
                </div>

           <div className='sections' style={{height:'80vh'}}>
           
           <Slide className='accordionMaster'><AccordeonHome /></Slide>
            <Slide direction='down' delay={500}>
           <Fade cascade delay={350} duration={1500}>
            <ol className='olHome' style={{width: isOpen ? "1%" : "", height: isOpen ? "90%" : ""}} > 
        
                <button onClick={toggle} className='closeWelcome' style={{background: isOpen ? "rgb(0, 0, 0)" : "transparent"}}><p style={{display: isOpen ? "none" : "flex" }}>Close</p> <p style={{display: isOpen ? "flex" : "none"}}>Open</p> <CancelIcon style={{paddingLeft:'0.4em', display: isOpen ? "none" : ""}}/><LockOpenIcon style={{paddingLeft:'0.4em', display: isOpen ? "flex" : "none"}}/></button>
                <li style={{display: isOpen ? "none" : ""}}><h1>Hi! i'm <span  ref={glitcho.ref}>MoMo</span>, </h1></li>
             
                <li style={{display: isOpen ? "none" : ""}} ><p className='generalText'>i invite you to follow me step by step</p> </li>
                <li style={{display: isOpen ? "none" : ""}}><p className='generalText'>so we can get each other and create, collab and just get fun!</p> </li> 
                <li style={{marginTop:'3em', alignItems:'center', alignSelf:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}> 
            <Link style={{display: isOpen ? "none" : ""}} to='https://t.me/MoMo_Works' target='blank_'>
           
           <button ref={glitch.ref} className='topbutton2' style={{ marginLeft:'2.2em', width:'200px', height:'58px', fontSize:'1em'}}>Write me</button></Link></li>
          
            </ol>
            
            </Fade></Slide>
            
            
           </div>
           </div >
           <div id='Gallery'></div>
            <div style={{width:'100%'}} /* Galeria*/>
                <div className='ruby' >
                    <h2><span ref={glitchoDos.ref}>Renders & Animations <AnimationIcon/></span></h2>
                </div>
           
            <Slide direction='right' className='sections' style={{height:'85vh', background:'black'}} >
            
            <Slide duration={1500} direction='left' ><MoMoGallery/ ></Slide> 
            
           </Slide>
           </div>

           <div style={{width:'100%'}} /* Tercero*/>
                <div className='ruby'>
                    <h2><span ref={glitcho.ref}>How do i create? <ComputerIcon/></span></h2>
                </div>

           <Slide  direction='left'  >
            <div className='sections'></div>
           
           
           </Slide>
           </div>
           
                
                    
               
                
                
           
           
        </div>
    );
};

export default Home;