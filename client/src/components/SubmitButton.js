import axios from 'axios';
import { Button } from '@mui/material';


const SubmitButton = ({ genre, mood, songs, setSongs }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(genre).forEach(function (key) {
      if (genre[key] === false) {
        delete genre[key];
      }
    });
    Object.keys(mood).forEach(function (key) {
      if (mood[key] === 0 || mood[key] === -60){
        delete mood[key];
      }
    });
    axios.post('/api', {genre, mood})
      .then((response) => setSongs(response.data.tracks))
      .catch((err) => console.log(err));
  }

  return (
    <Button color={'success'} variant={'contained'} sx={{m: 2 }} onClick={handleSubmit}>Get Recommendations</Button>
  )
}

export default SubmitButton
