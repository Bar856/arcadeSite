import React from 'react'
import Col from 'react-bootstrap/esm/Col'

export default function Djssquare(props) {
  return (
    <div>
      {
        props.djs.map((dj,i)=> {
          return  <Col xs={4} md={4} key={i} className='fontColor smallFont djsSquares'>{dj.name}</Col>
        })
      }
    </div>
  )
}
