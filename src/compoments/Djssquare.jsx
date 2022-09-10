import React from 'react'

export default function Djssquare(props) {
  return (
    <div className='row'>
      {
        props.djs.map((dj)=> {
          return  <div className='col smallFont djsSquares'>{dj.name}</div>
        })
      }
    </div>
  )
}
