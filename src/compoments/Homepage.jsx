import React from 'react'
import Introduction from './Introduction';
import About from './About';
import Djs from './Djs';
import Contact from './Contact';
import Sets from './Sets';
export default function Homepage() {
  return (
    <div>
        <Introduction/>
        <About />
        <Djs/>
        <Contact/>
        <Sets/>
    </div>
  )
}
