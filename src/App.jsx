import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Homepage from './compoments/Homepage';
// import { useState } from 'react';
import Sidebar from './compoments/Sidebar';
import './css/App.css';
import './fonts/OldNewspaperTypes/OldNewspaperTypes.ttf'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    
    <div className="App" id="outer-container" style={{"textAlign":"rtl"}}>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Router>
        <div className='container'>
        <div id="page-wrap">
      </div>
              <Routes>
                <Route path={'/arcadeSite'} element={<Homepage/>}/>
              </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;