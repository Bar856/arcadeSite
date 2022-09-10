import React from 'react'
import Introduction from './Introduction';
import About from './About';
import Djscont from './Djscont';
import Contact from './Contact';
import Sets from './Sets';
import MyNavabr from './MyNavabr';
export default function Homepage() {
  return (
    <div className='row'>
        <MyNavabr />
        <Introduction />
        <About />
        <Djscont />
        <Contact />
        <Sets />
    </div>
  )
}
