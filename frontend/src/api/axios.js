import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',  
  headers: {
    'Content-Type': 'application/json',
  }, // only if using cookies/auth
});

export default instance;

