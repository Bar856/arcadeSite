import React from 'react'
import Introduction from './Introduction';
import About from './About';
import Djscont from './Djscont';
import Contact from './Contact';
import Row from 'react-bootstrap/Row';
import Sets from './Sets';
export default function Homepage(props) {
  return (
    <Row>
      <Introduction setPageLng={props.setPageLng} pageLng={props.pageLng}/>
      <About />
      <Djscont />
      <Contact />
      <Sets />
    </Row>
  )
}
