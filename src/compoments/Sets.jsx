import React from 'react'
import SoundcloudLink from './SoundcloudLink'
export default function Sets() {

  return (
    <div id="sets" className='black heightWidth liveSetsCont'>
      <div className='row'>
        <h4>Live Sets</h4>
      </div>      
      <div className='row'>
        <h4 className='leftText smallFont'>Bar</h4>
      </div>      
        <SoundcloudLink url="https://soundcloud.com/barmaizel/back-to-reality-live-set" />
        <SoundcloudLink url="https://soundcloud.com/barmaizel/2020-new-year-live-set" />
      <div className='row'>
        <h4 className='leftText smallFont'>Or</h4>
      </div>
        <SoundcloudLink url="https://soundcloud.com/or-amar-4/lonely-boy-in-the-middle-east-techno-set-001" />
      <div className='row'>
        <h4 className='leftText smallFont'>Ran</h4>
      </div>
        <SoundcloudLink url="https://soundcloud.com/ranthedj/ran-the-dj-just-chillin-wit" />
        <SoundcloudLink url="https://soundcloud.com/ranthedj/friday-of-house-live-set" />

      <div className='row'>
        <h4 className='leftText smallFont'>Javali</h4>
      </div> 
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/hollywood-live-032021" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/set-hadash-etzel-ran" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/javali-igtv-video-setigjavalimusic-04232020" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/stay-home-project" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/javali" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/techno-live-set" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/hatula-live-set-27719-il" />
    </div>
  )
}
