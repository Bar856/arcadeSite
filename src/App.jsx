import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import { useState } from 'react';
import Sidebar from './compoments/Sidebar';
import './css/App.css';
import './fonts/OldNewspaperTypes/OldNewspaperTypes.ttf'
import Introduction from './compoments/Introduction';
import About from './compoments/About';
import Djs from './compoments/Djs';
import Contact from './compoments/Contact';
import Sets from './compoments/Sets';


function App() {
  return (
    <div className="App" id="outer-container" style={{"textAlign":"rtl"}}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Introduction/>
        <About />
        <Djs/>
        <Contact/>
        <Sets/>
      </div>
    </div>
  );
}

export default App;