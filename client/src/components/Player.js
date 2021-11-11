import CardMedia from '@mui/material/CardMedia';

import React from 'react'

const Player = ({songs}) => {
  return (
    songs.map(songs => {
      return <CardMedia component="iframe" src={`https://open.spotify.com/embed/track/${songs.id}`}/>
    })
  )
}

export default Player
