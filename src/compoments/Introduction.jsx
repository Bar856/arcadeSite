import React from 'react'
import pic1 from '../pics/oneimg.png'

export default function Introduction() {
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <div id="home" className='introContainer'>
      <img className='testpic' src={pic1} alt="Arcade" />
    <div className='row contactContainer '>
      <div className='col '>
        <div onClick={()=>openInNewTab(("tel:972526611137"))} className='smallFont contactItem hoverMouse pinkBoarders'>
          Call Now!
        </div>
      </div>
      <div onClick={()=>openInNewTab(("https://api.whatsapp.com/send?phone=972526611137"))}  className='col'>
        <div className='smallFont contactItem pinkBoarders hoverMouse'>
          Text Us!
        </div>
      </div>
    </div>
  </div>
  )
}
