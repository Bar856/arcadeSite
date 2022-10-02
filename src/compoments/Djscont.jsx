import React from 'react'
import Djssquare from './Djssquare'

export default function Djs() {
  const djsArray = [{name:'Bar'},{name:'Yarin'},{name:'Ran'},{name:'Or'},{name:'Donna'}];
  
  return (
    <div id="djs" className='aboutCont heightWidth black'>
      <h4 className='fontColor'>DJS</h4>
        <Djssquare djs={djsArray} />
    </div>
  )
}
