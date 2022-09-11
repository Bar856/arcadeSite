import React from 'react'
import Djssquare from './Djssquare'

export default function Djs() {
  const djsArray = [{name:'Bar'},{name:'Yarin'},{name:'Ran'},{name:'Or'}];
  
  return (
    <div id="djs" className='aboutCont heightWidth black'>
      <h4>DJS</h4>
        <Djssquare djs={djsArray} />
    </div>
  )
}
