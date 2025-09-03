import React from 'react';
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';

import Footer from '../src/pages/Footer';
import Topbar from '../src/components/Topbar';
import Background from './components/Background';




const App = () => {
  return (
    <HashRouter>
     
     <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Home />} />
         
          
        </Routes>
        
        </Sidebar>
        <Background/>
      <Topbar></Topbar> 
      <Footer></Footer> 
      
    </HashRouter>
  );
};

export default App;