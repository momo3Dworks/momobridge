import React from 'react';
import Marquee from "react-fast-marquee";
import Blender from '../assets/BlenderMarquee.webp';
import Figma from '../assets/FigmaMarquee.webp';
import Illustrator from '../assets/IllustratorMarquee.webp';
import Premiere from '../assets/PremiereMarquee.webp';
import VSCode from '../assets/VSMarquee.png';


const App = () => {
    
    return (
        <div className='MarqueeMaster 'style={{ maxWidth:'3600px'}} >
            <div className='MarqueeOverlay'></div>
    <Marquee direction='right' pauseOnHover={true} autoFill={true}   >
    <div style={{height:'100%'}}><img style={{height:'100%'}} src={Blender} alt="blender" /></div>
    <div style={{height:'100%'}}><img style={{height:'100%'}} src={Figma} alt="figma" /></div>
    <div style={{height:'100%'}}><img style={{height:'100%'}} src={Illustrator} alt="illustrator" /></div>
  
    <div style={{height:'100%'}}><img style={{height:'100%'}} src={Premiere} alt="premiere" /></div>
    <div style={{height:'100%'}}><img style={{height:'100%'}} src={VSCode} alt="vs" /></div>
  

    </Marquee>           
        </div>
    );
};

export default App;