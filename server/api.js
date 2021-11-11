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

const getRecommendation = async () => {
  const token = await getAuth();
  const artistId = '4Z8W4fKeB5YxbusRsdQVPb';
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}/albums/?include_groups=album&limit=10`,
      headers
    );
    const albums = response.data.items;
  } catch (error) {
    console.log(error);
  }
}

getRecommendation()