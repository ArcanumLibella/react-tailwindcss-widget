import axios from 'axios';

const Api = axios.create({
  // baseURL: `${process.env.GOOGLE_TRANSLATE_API_URL}`, TODO: Not working, why ?
  baseURL: 'https://translation.googleapis.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
