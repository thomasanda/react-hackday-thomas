import React, { useState } from 'react';
import './App.css';
import Genre from './components/Genre';
import Mood from './components/Mood';
import { Grid, Box } from '@mui/material';
import SubmitButton from './components/SubmitButton';
import Player from './components/Player'


function App() {
  const [mood, setMood] = useState({
    target_energy: 0.1,
    target_valence: 0.1,
    target_loudness: 0.1,
    target_acousticness: 0.1,
    target_danceability: 0.1
  });
  const [genre, setGenre] = useState({
    pop: true,
    jazz: false,
    rock: false,
    gospel: false,
    emo: false,
    happy: false,
    breakbeat: false,
    bossanova: false,
    electronic: false
  });
  const [songs, setSongs] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '10vh' }}
>
        <Genre genre={genre} setGenre={setGenre}/>
        <Mood mood={mood} setMood={setMood}/>
        <SubmitButton mood={mood} setMood={setMood} genre={genre} setGenre={setGenre} setSongs={setSongs} songs={songs}/>
        <Box width={500} sx={{border: '3px solid black', display: 'flex', flexDirection: 'column'}}>
        <Player songs={songs}/>
        </Box>
        </Grid>
      </header>
    </div>
  );
}

export default App;
