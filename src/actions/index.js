import axios from 'axios';

const url = 'https://www.googleapis.com/youtube/v3/search';
const apiKey = "AIzaSyA9tE_Npz1ACoI7_hbWYulpta3bkx4EoJE";

export function getYouTube(term) {
  const params = {
    part: 'snippet',
    q: term,
    type: 'video',
    key: apiKey,
  };

  return {
    type: "getYouTube",
    payload: axios.get(url,{params})
  };
}


