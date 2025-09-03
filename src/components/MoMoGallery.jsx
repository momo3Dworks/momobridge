import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Background2 from '../assets/Renders/0028.webp';
import PorscheBackImg from '../assets/PorscheBackImg.jpg';
import Porsche from '../components/video1Porsche';
import Sishio from '../components/video2Sishio';
import Dandy from '../components/video3Dandy';
import Flattron from '../components/video4Flattron';
import Moon from '../components/video5Moon';
import Monarch from '../components/video6Monarch';
import OniMask from '../components/video7OniMask';
import CarReveal from '../components/video8CarReveal';
import GPromo from '../components/video9GPPromo';
import Kitaro from '../components/video10Kitaro';
import Leemon from '../components/video11LeemonSHQ';
import Creamies from '../components/video12Creamies';
import GoldMember from '../components/video14GoldMember';
import GoldMolten from '../components/video15GoldMolten';
import Hangry from '../components/video16Hangry';
import HashGraph from '../components/video17HashGraph';
import StarkWolf from '../components/video18StarkWolf';

export default () => (


    

    <div id='whitepaperTop'>

       
  <Carousel >
 
    
  

    
    <div /* slider 1*/ style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    
        <img className="imgSlider" src={Background2} alt="back"></img>
        <p className="legend">Enjoy the slider</p>
    </div>
    
    <div /* slider 2*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
   
       
        <Porsche/>
        
        <p className="legend">Porsche 911 922 for Miami Crypto Experience 2020 </p>
    </div>
    <div /* slider 3*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
    

        </div>
        <Sishio/>
        <p className="legend">Radio Sishio goes to Space</p>
    </div>
    <div /* slider 4*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
   



        </div>
        <Dandy/>
        <p className="legend">Dandy Boy saves the TV Cable</p>
    </div>
    <div /* slider 5*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Flattron/>
        <p className="legend">Phillips "The Show" Flattron enslaves the TV</p>
    </div>
    
    <div /* slider 6*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Moon/>
        <p className="legend">Moon Conduct</p>
    </div>
    
    <div /* slider 7*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Monarch/>
        <p className="legend">Monarch 20XX</p>
    </div>
    
    <div /* slider 8*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <OniMask/>
        <p className="legend">Muten Musashi Oni Mask</p>
    </div>
    <div /* slider 9*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <CarReveal/>
        <p className="legend">Web3 Project | Car under cloth reveal</p>
    </div>
    <div /* slider 10*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <GPromo/>
        <p className="legend">Web3 Promo video | 3 or 4 scenes here</p>
    </div>
    <div /* slider 11*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Kitaro/>
        <p className="legend">Fishing at Mt Fuji ft. Kitaro</p>
    </div>
    <div /* slider 12*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Leemon/>
        <p className="legend">Cute Headquarters for a Web3 Project</p>
    </div>

    <div /* slider 13*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Creamies/>
        <p className="legend">Cute Web3 Digital Art Gallery</p>
    </div>

    <div /* slider 14*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <GoldMember/>
        <p className="legend">Gold Member Digital Card</p>
    </div>

    <div /* slider 15*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <GoldMolten/>
        <p className="legend">Gold Member Digital Card</p>
    </div>

    <div /* slider 16*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <Hangry/>
        <p className="legend">Gold Member Digital Card</p>
    </div>

    <div /* slider 17*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <HashGraph/>
        <p className="legend">Awesome Bar Venue & Digital Gallery</p>
    </div>

    <div /* slider 18*/style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <div >
            

        </div>
        <StarkWolf/>
        <p className="legend">Underwater Steampunk & SciFi Digital Gallery </p>
    </div>

  </Carousel>
  </div>
);
