import React from 'react'
import ReactPlayer from "react-player"

export default function SoundcloudLink(props) {
    const heighSoundcloud = "auto"
    const widthSoundcloud = "auto"
  
    return (
        <ReactPlayer
              allow="autoplay"
              width={widthSoundcloud}
              height={heighSoundcloud}
              url={props.url}
        />
  )
}
