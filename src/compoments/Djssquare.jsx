import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

export default function Djssquare(props) {
  return (
    <Row>
      {
        props.djs.map((dj,i)=> {
          return  <Col xs={6} md={3} key={i} className='fontColor smallFont djsSquares'>{dj.name}</Col>
        })
      }
    </Row>
  )
}
