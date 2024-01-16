import axios from 'axios';

export const BASE_URL = 'https://youtube138.p.rapidapi.com/search/';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '171602835cmsh2206575ce00f251p145caejsn47bdf29f1bb4',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};
/*
const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};*/

export const fetchFromAPI = async (url) => {
  console.log(`${BASE_URL}${url}`)
  const { data } = await axios.get(`${BASE_URL}${url}`, options);
  

  return data;
};

