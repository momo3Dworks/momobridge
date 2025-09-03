import React, { useState, useEffect } from 'react';
import logo from '../assets/0xgpt_logoF.svg';
import { HashLink } from 'react-router-hash-link';
import { useGlitch } from 'react-powerglitch'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HomeIcon from '@mui/icons-material/Home';



const Sidebar = ({children}) => {

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
       
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

      const[isOpen ,setIsOpen] = useState(false);
      const toggle = () => setIsOpen (!isOpen);

      const menuItem=[
        {
            path:'/page#gallery',
            name:"Go to Renders",
            content:"This is Home" 
           
        },
      
      ]
      const menuItem2= [
        {
            path:'/page#top',
            name2:"Go to Top",
            content:"Juicy Renders"
        },
      ]

    return (
        <div className="container"   >
            <div style={{   height: isOpen ? "25px" : "25px", 
                           
                           
                            width: isOpen ? "120px" : "180px"}} className="sidebar" activeclassName="active" activeClass='active'>
             {
                   menuItem.map((item, index)=>(  
               <HashLink smooth to={item.path} key={index}>
                <button ref={glitch.ref} className='topbutton2'  activeclassName='active' style={{height:'30px',overflow:'auto', width:'auto', paddingLeft:'0.5em', paddingRight:'0.5em', marginLeft:'0', marginRight:'0', display: isOpen ? "none" : "flex",background:'#788aef'}}   onClick={toggle}>{item.name}
                <div style={{ position:'absolute', 
                              fontSize:'0.5em', 
                              paddingRight:'0.5em', 
                              paddingLeft:'0.5em',
                              paddingTop:'0.2em',
                              bottom:'0%',
                              left:'0%', 
                              background:'black', 
                              color:'cyan', paddingRight:'2em',fontWeight:'500'}}>{item.content}<HomeIcon style={{maxHeight:'0.4em', padding:'0',position:'absolute', bottom:'0px', marginLeft:'-3px'}}/></div><CameraAltIcon style={{marginLeft:'0.2em'}}/></button>
                
                </HashLink> 
             
                ))
               }
             {
                   menuItem2.map((item, index)=>(  
               
                <HashLink smooth to={item.path} key={index}>
                
                <button ref={glitch.ref} className='topbutton2'   style={{height:'30px', width:'auto', paddingLeft:'0.5em', paddingRight:'0.5em', marginLeft:'0', marginRight:'0', display: isOpen ? "flex" : "none",background:'#D02CAC'}}   onClick={toggle}>{item.name2}<div style={{ position:'absolute', 
                              fontSize:'0.5em', 
                              paddingRight:'0.5em', 
                              paddingLeft:'0.5em',
                              paddingTop:'0.2em',
                              bottom:'0%',
                              left:'0%', 
                              background:'black', 
                              color:'cyan', paddingRight:'2em',fontWeight:'500'}}>{item.content}<CameraAltIcon style={{maxHeight:'0.4em', padding:'0',position:'absolute', bottom:'0px', marginLeft:'-3px'}}/></div><HomeIcon  style={{marginLeft:'0.2em'}}/></button>
                </HashLink> 
                ))
               }

            </div>


           <main>{children}</main>
          
        
        </div>
    );
};

export default Sidebar;