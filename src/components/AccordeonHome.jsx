import React from 'react';

import { FullpageAccordion, Panel } from "react-fullpage-accordion";
import "react-fullpage-accordion/dist/react-fullpage-accordion.css";
import MoMoRender from '../assets/Renders/MOMO1.webp';
import SelfRender from '../assets/Renders/1212_2.webp';
import DandyRender from '../assets/Renders/22.png';
import VideoLacra from '../components/Video';

const AccordeonHome = () => {
    
    return (
        <div className=''>
         
         <FullpageAccordion>
        <Panel
          itemId="0"
          background={MoMoRender}
          className='panelHome'
        >
          <div>
          <p className='panelUpText'>Create your own</p>
          </div>
          <div>
          <p className='panelDownText'>AVATAR</p></div>
        </Panel>
        <Panel
          itemId="1"
          background={SelfRender}
        ><div>
          <p className='panelUpText'>Build your</p></div>
          <div>
          <p className='panelDownText'>CHARACTER CREATION</p></div>
        </Panel>
        <Panel
          itemId="2"
          background={DandyRender}
        ><div>
          <p className='panelUpText'>Bring your project</p></div>
          <div>
          <p className='panelDownText'>A LIFE IT OWN</p></div>
        </Panel>
      </FullpageAccordion>

         </div>
    );
};

export default AccordeonHome;