import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import Homepage from './compoments/Homepage';
import MyNavabr from './compoments/MyNavabr';
import './css/App.scss';
import './fonts/OldNewspaperTypes/OldNewspaperTypes.ttf'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';

function App() {
  const [pageLng, setPageLng] = useState("Eng")
  
  return (
    <div className="App" style={pageLng === "Eng" ? {"textAlign":"ltr"} : {"textAlign":"rtl"}}>
      <MyNavabr />
      <Router>
        <Container fluid>
          <Routes>
            <Route path={'/arcadeSite'} element={<Homepage setPageLng={setPageLng} pageLng={pageLng}/>}/>
          </Routes>
        </Container >
      </Router>
    </div>
  );
}

export default App;