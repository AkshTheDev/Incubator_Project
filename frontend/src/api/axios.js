import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://8d42-36-255-84-98.ngrok-free.app',  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

