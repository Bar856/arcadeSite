import React from 'react'
import { send } from 'emailjs-com';
import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row'
export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_phone: '',
    from_email: '',
    message: '',
  });
  

  const onSubmit = (e) => {
    e.preventDefault();
    send('default_service', 'template_u7qjs6a', toSend, 'KujO7cLgeR4Ob6131')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" className='aboutCont heightWidth'>
      <Row >
        <h4 className='center'>Contact Us</h4>
      </Row>
      <form onSubmit={onSubmit}>
          <Row >
            <input onChange={handleChange} maxLength={15} className='formItem smallFont' type="text" placeholder='NAME' name="from_name" />
          </Row>
          <Row >
            <input onChange={handleChange} maxLength={10} className='formItem smallFont' type="text" placeholder='PHONE' name="from_phone" />
          </Row>
          <Row >
            <input onChange={handleChange} maxLength={40} className='formItem smallFont' type="text" placeholder='EMAIL' name="from_email" />
          </Row>
          <Row >
            <textarea onChange={handleChange} className='text-flow formItem smallFont' type="text" placeholder='SAY SOMETHIGN' name="message"/>
          </Row>
          <Row >
            <input className='submitBtn formItem rowWidth smallFont' type="submit" value="Send"/>
          </Row>
        </form>
  </div>
  )
}
