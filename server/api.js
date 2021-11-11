const axios = require('axios');
const qs = require('qs');

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const getAuth = async () => {

  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const getRecommendation = async (genres, mood) => {
  const token = await getAuth();
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    params: {
      'seed_genres': `${genres}`,
      'target_energy': `${mood.target_energy}`,
      'target_valence': `${mood.target_valence}`,
      'target_loudness': `${mood.target_loudness}`,
      'target_acousticness': `${mood.target_acousticness}`,
      'max_danceability': `${mood.target_danceability}`
    }
  }
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/recommendations?limit=10',
      headers
    );
    const albums = response.data;
    return albums;
  } catch (error) {
    console.log(error);
  }
}

exports.getRecommendation = getRecommendation;
