import React from 'react'
import SoundcloudLink from './SoundcloudLink'
import Row from 'react-bootstrap/esm/Row';
export default function Sets() {

  return (
    <div id="sets" className='fontColor liveSetsCont  liveSetsCont'>
      <Row>
        <h4>Live Sets</h4>
      </Row>      
      <Row>
        <h4 className='leftText fontColor smallFont'>Bar</h4>
      </Row>      
        <SoundcloudLink url="https://soundcloud.com/barmaizel/back-to-reality-live-set" />
        <SoundcloudLink url="https://soundcloud.com/barmaizel/2020-new-year-live-set" />
      <Row>
        <h4 className='leftText fontColor smallFont'>Or</h4>
      </Row>
        <SoundcloudLink url="https://soundcloud.com/or-amar-4/lonely-boy-in-the-middle-east-techno-set-001" />
      <Row>
        <h4 className='leftText fontColor smallFont'>Ran</h4>
      </Row>
        <SoundcloudLink url="https://soundcloud.com/ranthedj/ran-the-dj-just-chillin-wit" />
        <SoundcloudLink url="https://soundcloud.com/ranthedj/friday-of-house-live-set" />
      <Row>
        <h4 className='leftText fontColor smallFont'>Javali</h4>
      </Row> 
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/hollywood-live-032021" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/set-hadash-etzel-ran" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/javali-igtv-video-setigjavalimusic-04232020" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/stay-home-project" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/javali" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/techno-live-set" />
        <SoundcloudLink url="https://soundcloud.com/javaliofficial/hatula-live-set-27719-il" />
        <h4 className='leftText fontColor smallFont'>Yagel</h4>

    </div>
  )
}
