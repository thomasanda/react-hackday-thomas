import React, { useState } from 'react';
import { Box, FormGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';

const Genre = () => {
  const [state, setState] = useState({
    pop: true,
    jazz: false,
    rock: false,
    gospel: false,
    emo: false,
    happy: false,
    breakbeat: false,
    bossanova: false,
    electronic: false
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const { pop, jazz, rock, gospel, emo, happy, breakbeat, bossanova, electronic } = state;
  const error = [pop, jazz, rock, gospel, emo, happy, breakbeat, bossanova, electronic].filter(v => v).length > 5;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl
        required
        sx={{ m: 3 }}
        component="fieldset"
        variant="standard"
        error={error}
        >
        <FormLabel component="legend">Choose Maximum 5 Genres</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={pop} onChange={handleChange} name='pop' />
            }
            label="Pop"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jazz} onChange={handleChange} name='jazz' />
            }
            label="Jazz"
          />
          <FormControlLabel
            control={
              <Checkbox checked={rock} onChange={handleChange} name='rock' />
            }
            label="Rock"
          />
          <FormControlLabel
            control={
              <Checkbox checked={gospel} onChange={handleChange} name='gospel' />
            }
            label="Gospel"
          />
          <FormControlLabel
            control={
              <Checkbox checked={emo} onChange={handleChange} name='emo' />
            }
            label="Emo"
          />
          <FormControlLabel
            control={
              <Checkbox checked={happy} onChange={handleChange} name='happy' />
            }
            label="Happy"
          />
          <FormControlLabel
            control={
              <Checkbox checked={breakbeat} onChange={handleChange} name='breakbeat' />
            }
            label="Breakbeat"
          />
          <FormControlLabel
            control={
              <Checkbox checked={bossanova} onChange={handleChange} name='bossanova' />
            }
            label="Bossanova"
          />
          <FormControlLabel
            control={
              <Checkbox checked={electronic} onChange={handleChange} name='electronic' />
            }
            label="Electronic"
          />
        </FormGroup>
      </FormControl>
    </Box >
  )
}

export default Genre
