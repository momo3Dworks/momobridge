import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MoMoGallery from '../components/MoMoGallery';

import { useGlitch } from 'react-powerglitch';

import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ComputerIcon from '@mui/icons-material/Computer';
import AccordeonHome from '../components/AccordeonHome';
import CancelIcon from '@mui/icons-material/Cancel';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Marquee from '../components/MoMoMarquee';
import MoMoFooter from '../assets/MomoForFooter.webp';
import DandyForFooter from '../assets/DandyForFooter.webp';
import TextMarquee from '../components/TextMarquee';
import TwitterIcon from '@mui/icons-material/Twitter';
import GamepadIcon from '@mui/icons-material/Gamepad';
import Spline from '@splinetool/react-spline';


const Home = () => {

  const InteractionPanel=[
    {
        
        
        content:"...the back images" 
       
    },
  
  ]

  const WriteMe=[
    {
        path:'https://x.com/MoMo3DWorks',
        name:"Let's Create!",
        content:"Write me" 
       
    },
  
  ]

  const GoToYoutube=[
    {
        path:'https://www.youtube.com/channel/UCxLVP58npDfiJLU-tKA7-8g',
        name:"View on YouTube",
       
       
    },
  
  ]

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
       
        <div className='homeContainer 'id="top">
         
 
            
           <div style={{maxWidth:'1440px', width:'100%', minHeight:'80vh'}} /* Home*/  >

                <div className='ruby'>
                    <h2><span  >Welcome <HomeIcon/></span></h2>
                </div>

           <div className='sections' style={{height:'80vh'}}>
            <div><button onClick={toggle} className='closeWelcome' style={{background: isOpen ? "rgb(0, 0, 0)" : "transparent", left: isOpen ? "1%" : "82%"}}>
            {
                   InteractionPanel.map((item, index)=>(  
               <div>
              
                <div style={{ position:'absolute', 
                              fontSize:'0.5em', 
                              paddingRight:'0.5em', 
                              paddingLeft:'0.5em',
                              paddingTop:'0.2em',
                              bottom:'0%',
                              left:'0%', 
                              background:'cyan', 
                              color:'black',fontWeight:'700', display:isOpen ? "none" : "block"}}>{item.content}</div>
                
                </div> 
             
                ))
               }<p style={{display: isOpen ? "none" : "flex" , fontWeight:'900', textShadow:'none'}}>Close to reveal</p>  <CancelIcon style={{paddingLeft:'0.4em', display: isOpen ? "none" : "flex"}}/><LockOpenIcon style={{paddingLeft:isOpen ? "0" : "0.4em", display: isOpen ? "flex" : "none"}}/></button></div>
           
           <div className='accordionMaster' style={{opacity: isOpen ? "1" : "0.5"}}><AccordeonHome  /></div>
            <div className='olHomeContainer'>
              
           <div cascade delay={350} duration={1500}>
           
            <ol className='olHome' style={{ display: isOpen ? "none" : "flex", position:'relative'}} > 
        
                
                <li style={{display: isOpen ? "none" : "flex"}}><h1>Hi! i'm <span  ref={glitcho.ref}>MoMo</span>, </h1></li>
             
                <li style={{display: isOpen ? "none" : "flex"}} ><p className='generalText'>I invite you to join me step by step,</p> </li>
                <li style={{display: isOpen ? "none" : "flex"}}><p className='generalText'>so we can collaborate, create, and bring ideas to life—all while enjoying the process!</p> </li> 
                <li style={{marginTop:'3em', alignItems:'center', alignSelf:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}> 

                {
                   WriteMe.map((item, index)=>(  
               <div smooth to={item.path} key={index} style={{width:'auto'}}>
              <Link style={{display: isOpen ? "none" : "flex", position:'relative', width:'auto'}} to={item.path} target='blank_'>
           
           <button ref={glitch.ref} className='topbutton2' style={{ marginLeft:'2.2em', width:'200px', height:'58px', fontSize:'2em', position:'relative'}}>{item.name} 

           <div style={{ position:'absolute', 
                              fontSize:'0.3em', 
                              paddingRight:'0.5em', 
                              paddingLeft:'0.5em',
                              paddingTop:'0.2em',
                              bottom:'0%',
                              left:'0%', 
                              background:'black', 
                              color:'cyan', paddingRight:'2em', fontWeight:'500'}}>{item.content}<TwitterIcon  style={{maxHeight:'0.4em', padding:'0',position:'absolute', marginBottom:'2px', marginLeft:'-3px'}}/></div>
           </button>
                
                </Link>
                </div> 
             
                ))
               }
            </li>
          
            </ol>
            
            </div></div>
            
         
           </div>
          
           </div >

           
           <div style={{maxWidth:'1440px', width:'100%', height:'100vh'}}>
           <div className='ruby'>
                    <h2><span  >Live Rendering <GamepadIcon/></span></h2>
                </div>

            <div className='sections' id='spline1' style={{height:'85vh'}}>
            <Spline   scene="https://prod.spline.design/cX4PEWF78bLEHvuZ/scene.splinecode" />
            </div>

            </div> 
          
           <div style={{maxWidth:'1440px', width:'100%'}} /* Tercero*/>
                <div className='ruby'>
                    <h2><span >How do i create? <ComputerIcon/></span></h2>
                </div>

                <Slide direction='right' className='sections' style={{height:'85vh', background:'black'}} >
                
            <div >
              <ol className='createSection'>
                <li style={{color:'cyan'}}>The creative workflow may adapt to each project, but the core process remains consistent. </li>
                <li style={{color:'cyan'}}>We begin by gathering visual references from Google or any preferred image source to establish a clear artistic direction.</li>
                <li style={{color:'cyan'}}>Next comes the exciting phase—after refining the overall concept through discussion, we initiate the first render pass.</li>
                <li style={{color:'cyan'}}>From there, we iterate with precise adjustments and enhancements, ensuring a polished final result through continuous refinement and optimization.</li>
                </ol>
              
              <Marquee style={{height:'2em'}} />
              <ol className='createSection2'>
                <li >TOOLS & SOFTWARE STACK FOR DESIGN AND DEVELOPMENT: </li>
                <li >- 3D Modeling & Animation: <span style={{filter:'brightness(40%)'}}>Blender – for high-quality asset creation and animation.</span></li>
                <li >- Video Compositing & Editing: <span style={{filter:'brightness(40%)'}}>Adobe Premiere Pro – for seamless video production and post-processing.</span></li>
                <li >- Vector Graphics & Branding: <span style={{filter:'brightness(40%)'}}>Adobe Illustrator – for SVG design, logo creation, and social media graphics.</span> </li>
                <li >- Frontend Development & UX/UI Design: <span style={{filter:'brightness(40%)'}}>Figma & VS Code – for intuitive user experiences and responsive web interfaces. </span></li>
                </ol>
             
              </div> 
            
           </Slide>
           </div>
       
            <div style={{ width:'100%', maxWidth:'1440px'}} id='gallery'>
                <div className='ruby' >
                    <h2><span >Renders & Animations <CameraAltIcon/></span></h2>
                    {
                   GoToYoutube.map((item, index)=>(  
               <div smooth to={item.path} key={index} style={{width:'auto'}}>
              <Link  to={item.path} target='blank_'>
           
           <button className='GoToYoutube' >{item.name} </button>
                
                </Link>
                </div> 
             
                ))
               }
                </div>
           
            <Slide direction='right' className='sections' style={{height:'85vh', background:'black', marginBottom:'15em'}} >
           
            <Slide duration={1500} direction='left' > <MoMoGallery/ ></Slide> 
            
           </Slide>
           </div>
           <div style={{position:'relative'}}><div style={{position:'relative', left:'-18px'}} className='MarqueeOverlay'><TextMarquee style={{width:'100%'}} /></div></div>
           <div style={{ width:'100%', height:'15vh', marginTop:'2em', zIndex:'3',maxWidth:'1440px'}} id='last'/* Ultimo*/ data-aos="fade-up">
            <div className='sections' style={{marginBottom:'-50px', overflow:'initial'}}>
                <div className='momoFooter'>
                <div className='DandyController'>
                  <img src={DandyForFooter} alt="dandyfooter" className='momoIMG' />
                </div>
                </div> 
            </div>
            </div>
              
           
           
                
                    
               
                
                
           
           
        </div>
    );
};

export default Home;