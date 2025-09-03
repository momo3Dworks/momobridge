import React from 'react';
import Marquee from "react-fast-marquee";
import Noise from '../components/NoiseDittering';

const App = () => {
    
    return (
        <div className='MarqueeMaster 'style={{ maxWidth:'3600px'}} >
            <div className='MarqueeOverlay'></div>
    <Marquee speed={150}  pauseOnHover={true} autoFill={true}   >
    <div style={{height:'100%'}}><p style={{fontSize:'4em', fontWeight:'900', textTransform:'uppercase', marginRight:'1em'}}>Come back soon.</p></div>
    <div style={{height:'100%'}}><p style={{fontSize:'4em', fontWeight:'900', textTransform:'uppercase', marginRight:'1em'}}>I can also support your project with&nbsp;<span>UX/UI/Frontend</span>&nbsp;ideas.</p></div>
    <div style={{height:'100%'}}><p style={{fontSize:'4em', fontWeight:'900', textTransform:'uppercase', marginRight:'1em'}}>This site was designed and coded in <span style={{filter:'brightness(100%)'}}>VSCode</span> with Reactjs and some juicy libraries by me. </p></div>
  
    <div style={{height:'100%'}}></div>
    <div style={{height:'100%'}}></div>
  
    <Noise/>
    </Marquee>           
        </div>
    );
};

export default App;