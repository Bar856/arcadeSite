import React from 'react'
import { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import pic1 from '../pics/arcadeLogo.png'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
export default function Introduction(props) {

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  const clickHeb = () => {
    props.setPageLng('Heb');
    setHebPushed(true)
    setEngLngPushed(false)
  }
  const clickEng = () =>{
    props.setPageLng('Eng');
    setHebPushed(false);
    setEngLngPushed(true);
  }
  const [hebPushed, setHebPushed] = useState(false)
  const [engPushed, setEngLngPushed] = useState(true)
  return (
    <div id="home" className='introContainer heightWidth'>
      <ButtonGroup size={"sm"} aria-label="Basic example">
        <Button className='fontColor' onClick={clickEng} variant={engPushed ? "secondary" : ""} >{hebPushed ? 'אנג' : 'En'}</Button>
        <Button className='fontColor' onClick={clickHeb} variant={hebPushed ? "secondary" : ""} >{engPushed ? 'He' : 'עב'}</Button>
      </ButtonGroup>
      <Row>
        <Col>
        <Image className='imgInto' src={pic1} alt="Arcade" />
        </Col>
      </Row>
      <Row className='contactContainer margeSides'>
        <Col>
          <div onClick={()=>openInNewTab(("tel:972526611137"))} className='smallFont contactItem hoverMouse pinkBoarders'>
            {hebPushed ? "התקשר עכשיו" : 'Call Now!'}
          </div>
        </Col>
        <Col>
          <div onClick={()=>openInNewTab(("https://api.whatsapp.com/send?phone=972526611137"))} className='smallFont contactItem pinkBoarders hoverMouse'>
            {hebPushed ? "שלחו הודעה" : 'Text Us!'}
          </div>
        </Col>
      </Row>
  </div>
  )
}
