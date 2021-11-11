import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

const Mood = ({ mood, setMood }) => {
  const handleChange = (e) => {
    setMood({
      ...mood,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Box width={300}>
       <Typography id="energetic" gutterBottom>
        Energetic
      </Typography>
      <Slider aria-label="energetic" name="target_energy" onChange={handleChange} step={0.1} min={0.1} max={1} ></Slider>
       <Typography id="happy" gutterBottom>
        Happy
      </Typography>
      <Slider aria-label="happy" name="target_valence" onChange={handleChange} step={0.1} min={0.1} max={1} ></Slider>
       <Typography id="aggressive" gutterBottom>
        Aggressive
      </Typography>
      <Slider aria-label="aggressive" name="target_loudness" onChange={handleChange} step={5} min={-60} max={0} ></Slider>
       <Typography id="peaceful" gutterBottom>
        Peaceful
      </Typography>
      <Slider aria-label="peaceful" name="target_acousticness" onChange={handleChange} step={0.1} min={0.1} max={1} ></Slider>
       <Typography id="excited" gutterBottom>
        Excited
      </Typography>
      <Slider aria-label="excited" name="target_danceability" onChange={handleChange} step={0.1} min={0.1} max={1} ></Slider>
    </Box>
  )
}

export default Mood
